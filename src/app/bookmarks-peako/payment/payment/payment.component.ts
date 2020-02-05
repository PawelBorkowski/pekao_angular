import { IAccount } from './../../../interfaces/iaccount';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { SendingFormsService } from '../sending-forms.service';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  accounts: IAccount[];

  amountCalculated;
  objectAmount: object;
  objectAmount2: object;
  amountMY = 0;
  status = false;
  id: any;
  end: number = 5;
  start: number = 0;
  spend: number;
  revenues;
  total: number;

  // public barChartOptions: ChartOptions = {
  //     responsive: true
  // };
  // public barChartLabels: Label[] = ['Przelewy'];
  // public barChartType: ChartType = 'bar';
  // public barChartLegend = true;
  // public barChartPlugins = [];

  // public barChartData: ChartDataSets[] = [
  //     { data: [this.spend], label: 'Wydatki' },
  //     { data: [this.revenues], label: 'Przychody' }
  // ];

  chart: Chart;
  name = 'Angular 5 chartjs';
  constructor(public authService: AuthService, private myService: SendingFormsService) { }

  ngOnInit() {
    this.authService.profile$.subscribe(profile => {
      if (!profile) {
        return;
      }
      this.accounts = Object.values(profile.accounts);

      let total = 0;
      let spend = 0;
      let revenues = 0;

      this.objectAmount = Object.values(profile.accounts['ID-1'].transactions);

      for (const key in this.objectAmount) {
        this.total += +this.objectAmount[key].amount;

        if (this.objectAmount[key].amount < 0) {
          spend += this.objectAmount[key].amount * -1;
        } else {
          revenues += this.objectAmount[key].amount;
        }
      }

      this.amountCalculated = this.amountMY + total;
      console.log(total);

      console.log('Moje konta', this.accounts);
      console.log('Moje kasa', this.objectAmount);
      console.log('Moje kasa', spend);
      console.log('Moje kasa', revenues);


      this.chart = new Chart('canvas', {
        type: 'pie',
        data: {
          labels: ['Wpływy', 'Wydatki'],
          datasets: [
            {
              label: 'test',
              data: [spend, revenues],
              backgroundColor: ['#0074D9', '#FF4136']
            }

          ]
        },
        options: {
          title: {
            display: false,
            text: 'Color test'
          },
          legend: {
            position: 'bottom',
            display: true,
            fullWidth: true,
            labels: {
              fontSize: 11
            }
          },
          scales: {}
        }
      });

    });


  }

  addClass(change) {
    change.active = !change.active;
  }
  showMore() {
    this.end += 3;
  }
}
