import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/login/auth.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SendingFormsService {
    tempPayment;

    constructor(public auth: AuthService) {}
    acceptSMS() {
        const user = this.auth.user;
        const dbRefList = firebase
            .database()
            .ref('/users/' + user.uid)
            .child('accounts/ID-1/transactions');

        console.log(this.tempPayment);
        dbRefList.push(this.tempPayment);
    }
}
