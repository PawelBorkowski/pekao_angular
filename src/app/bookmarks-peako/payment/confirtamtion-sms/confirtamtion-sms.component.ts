import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/login/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-confirtamtion-sms',
  templateUrl: './confirtamtion-sms.component.html',
  styleUrls: ['./confirtamtion-sms.component.scss']
})
export class ConfirtamtionSMSComponent implements OnInit {

  confirmSMS: FormGroup;

  public DataForm = new DataForm();
  public tasks;
  public user;

  constructor(public authService: AuthService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.confirmSMS = new FormGroup({
      userSMS: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() { }

  acceptSMS() {
    console.log(this.confirmSMS);

    const dbRefList = firebase
      .database()
      .ref('/users/' + this.user.uid)
      .child('accounts/RANDOMSTRING');

    console.log(this.DataForm, this.tasks.length);
    dbRefList.update({ [this.tasks.length]: this.DataForm });

    this.router.navigate(['/payment']);

    /// gfrgrf
  }
}

class DataForm {
  constructor(
    public accNumber?: string,
    public address?: string,
    public amount?: number,
    public accountName?: string,
    public standingOrder: boolean = false,
    public nameOrder?: number
  ) { }
}
