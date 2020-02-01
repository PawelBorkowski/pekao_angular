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

    amountMY: string;

    constructor(public authService: AuthService, private myService: SendingFormsService) {}

    ngOnInit() {
        this.authService.profile$.subscribe(profile => {
            if (!profile) {
                return;
            }
            this.accounts = Object.values(profile.accounts);
            let total = 0;

            for (const key in profile.accounts['ID-1'].transaction) {
            }

            console.log('Moje kasa', this.amountMY);
            console.log('Moje konta', this.accounts);
        });
    }
}
