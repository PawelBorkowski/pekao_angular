import { IAccount } from './../../../interfaces/iaccount';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { SendingFormsService } from '../sending-forms.service';

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
                // if (this.objectAmount[key].type === 'from') {
                //     this.objectAmount[key].amount = +this.objectAmount[key].amount * -1;
                // }

                total += +this.objectAmount[key].amount;
            }

            this.amountCalculated = this.amountMY + total;
            console.log(total);
            console.log('Moje konta', this.accounts);
            console.log('Moje kasa', this.objectAmount);
        });
    }
}
