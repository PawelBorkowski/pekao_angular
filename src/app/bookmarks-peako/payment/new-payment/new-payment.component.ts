import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, NgForm } from '@angular/forms';
import * as IBAN from 'iban';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.scss']
})
export class NewPaymentComponent implements OnInit {
  @ViewChild('form', { static: true }) form: NgForm;
  newPaymentForm: FormGroup;
  public DataForm = new DataForm();
  public tasks;
  public user;


  constructor(private router: Router) {
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this.newPaymentForm = new FormGroup({
      accNumber: new FormControl('SI 56 1910 0000 0123 438', [Validators.required, this.ValidateIban]),
      amount: new FormControl(null, [Validators.required]),
      recipientsAddress: new FormControl(null),
      title: new FormControl(null, [Validators.required]),
      isStandingOrder: new FormControl(null),
      nameOrder: new FormControl(null, [Validators.required])
    });
  }

  ValidateIban(control: AbstractControl) {
    const isValid = IBAN.isValid(control.value);
    if (isValid) {
      return null;
    }
    return { accNumber: true };
  }

  submit() {
    console.log(this.newPaymentForm);
    this.router.navigate(['payment/confirmSMS']);


    const dbRefList = firebase
      .database()
      .ref('/users/' + this.user.uid)
      .child('accounts/RANDOMSTRING');

    console.log(this.DataForm, this.tasks.length);
    dbRefList.update({ [this.tasks.length]: this.DataForm });
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
