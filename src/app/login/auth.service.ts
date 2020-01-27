import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable, BehaviorSubject } from 'rxjs/index';
import * as firebase from 'firebase/app';

export interface ICredentials {
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public isUserLogged$ = new BehaviorSubject(false);

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

    logOut() {
        // this.user = false;
        return this.fireAuth.auth.signOut();
    }
}
