import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user = false;
  constructor() { }

  logIn() {
    this.user = true;
  }

  logOut() {
    this.user = false;
  }
}
