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
    // myMethod$: Observable<any>;
    // private myMethodSubject = new Subject<any>();

    // constructor() {
    //     this.myMethod$ = this.myMethodSubject.asObservable();
    // }

    // myMethod(newPaymentForm) {
    //     console.log(newPaymentForm); // I have data! Let's return it so subscribers can use it!
    //     // we can do stuff with data if we want
    //     this.myMethodSubject.next(newPaymentForm);
    // }
}
