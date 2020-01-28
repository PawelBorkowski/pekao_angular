import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable, BehaviorSubject } from 'rxjs/index';
import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

export interface ICredentials {
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public isUserLogged$ = new BehaviorSubject(false);

    private dbRef: firebase.database.Reference;

    public profile;

    readonly authState$: Observable<User | null> = this.fireAuth.authState;

    constructor(private fireAuth: AngularFireAuth) {
        this.authState$.subscribe(user => {
            this.isUserLogged$.next(!!user);
        });
    }

    get user(): User | null {
        return this.fireAuth.auth.currentUser;
    }

    login({ email, password }: ICredentials) {
        // this.user = true;
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    // showData() {
    //     if (this.user) {
    //         this.dbRef = firebase.database().ref('/users/' + this.user.uid);
    //         this.dbRef.on('value', snapshot => {
    //             this.profile = snapshot.val().accounts;
    //             console.log(this.profile);
    //         });
    //     } else if (this.dbRef) {
    //         this.dbRef.off();
    //         this.profile = [];
    //     }
    // }

    logOut() {
        // this.user = false;
        return this.fireAuth.auth.signOut();
    }
}
