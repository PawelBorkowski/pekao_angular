import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs/index';
import * as firebase from 'firebase/app';



export interface Credentials {
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // public user = false;
  readonly authState$: Observable<User | null> = this.fireAuth.authState;

  constructor(private fireAuth: AngularFireAuth) { }

  get user(): User | null {
    return this.fireAuth.auth.currentUser;
  }

  login({ email, password }: Credentials) {
    // this.user = true;
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logOut() {
    // this.user = false;
    return this.fireAuth.auth.signOut();
  }
}
