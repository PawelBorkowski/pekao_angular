import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/login/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { SendingFormsService } from '../sending-forms.service';

@Component({
    selector: 'app-confirtamtion-sms',
    templateUrl: './confirtamtion-sms.component.html',
    styleUrls: ['./confirtamtion-sms.component.scss']
})
export class ConfirtamtionSMSComponent implements OnInit {
    confirmSMS: FormGroup;

    newPaymentForm: FormGroup;

    constructor(public auth: AuthService, private router: Router, private myService: SendingFormsService) {
        this.createForm();
    }

    createForm() {
        this.confirmSMS = new FormGroup({
            userSMS: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')])
        });
    }

    ngOnInit() {}

    acceptSMS() {
        console.log(this.confirmSMS);
        const user = this.auth.user;
        if (!user) {
            this.router.navigate(['login']);
            return;
        }
        this.myService.acceptSMS();

        this.router.navigate(['/payment']);
    }
}
