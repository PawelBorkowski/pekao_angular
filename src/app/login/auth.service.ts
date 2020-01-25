import { Injectable } from '@angular/core';
import 'firebase/auth';
import 'firebase/database';

import * as firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public user = false;

    constructor() {}

    logIn() {
        this.user = true;
    }

    logOut() {
        this.user = false;
    }
}
