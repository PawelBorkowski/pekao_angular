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

    constructor(public authService: AuthService, private myService: SendingFormsService) {}

    ngOnInit() {
        this.authService.profile$.subscribe(profile => {
            if (!profile) {
                return;
            }
            this.accounts = Object.values(profile.accounts);

            console.log('Moje konta', this.accounts);
        });
    }
}
