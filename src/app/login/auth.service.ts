import { Injectable } from '@angular/core';

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
    public profile$ = new BehaviorSubject(null);
    accounts$: any;

    get user(): User | null {
        return firebase.auth().currentUser;
    }

    readonly user$ = new Observable<firebase.User>(observer => {
        firebase.auth().onAuthStateChanged(user => {
            observer.next(user);
        });
    });

    private dbRef: firebase.database.Reference;

    constructor() {
        this.user$.subscribe(user => {
            this.isUserLogged$.next(!!user);
            console.log('uzytkownik: ', user);
            if (user) {
                this.dbRef = firebase.database().ref('/users/' + user.uid);
                this.dbRef.on('value', snapshot => {
                    this.profile$.next(snapshot.val());
                    console.log('Data:', snapshot.val());
                });
            } else if (this.dbRef) {
                this.profile$.next(null);
                this.dbRef.off();
            }
        });
    }

    login({ email, password }: ICredentials) {
        // this.user = true;
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
    logOut() {
        // this.user = false;
        return firebase.auth().signOut();
    }
}
