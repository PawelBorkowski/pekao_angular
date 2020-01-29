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
    this.router.navigate(['/payment']);

    /// gfrgrf
  }
}


