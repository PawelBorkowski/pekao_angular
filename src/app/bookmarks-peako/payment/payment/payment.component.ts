import { IAccount } from './../../../interfaces/iaccount';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { SendingFormsService } from '../sending-forms.service';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
    accounts: IAccount[];

    amountCalculated;
    objectAmount: object;
    amountMY = 0;
    status = false;
    id: any;
    end: number = 5;
    start: number = 0;

    public barChartOptions: ChartOptions = {
        responsive: true
    };
    public barChartLabels: Label[] = ['Przelewy'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [];

    public barChartData: ChartDataSets[] = [
        { data: [this.amountCalculated], label: 'Wydatki' },
        { data: [2800], label: 'Przychody' }
    ];

    constructor(public authService: AuthService, private myService: SendingFormsService) {}

    ngOnInit() {
        this.authService.profile$.subscribe(profile => {
            if (!profile) {
                return;
            }
            this.accounts = Object.values(profile.accounts);

            let total = 0;
            this.objectAmount = Object.values(profile.accounts['ID-1'].transactions);

            for (const key in this.objectAmount) {
                total += +this.objectAmount[key].amount;

                if (this.objectAmount[key].amount < 0) {
                    // this.objectAmount[key].amount = +this.objectAmount[key].amount * -1;
                    // let spent =
                }
            }

            this.amountCalculated = this.amountMY + total;
            console.log(total);

            console.log('Moje konta', this.accounts);
            console.log('Moje kasa', this.objectAmount);
        });
    }

    addClass(change) {
        change.active = !change.active;
    }
    showMore() {
        this.end += 3;
    }
}
