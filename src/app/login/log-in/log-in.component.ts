import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  logInForm: FormGroup;
  constructor(public authService: AuthService, private fb: FormBuilder) {
    this.createForm();
  }


  createForm() {
    this.logInForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userPassword: new FormControl(null, [Validators.required]),
    });


  }
  ngOnInit() {

  }

  logoin() {
    this.authService.logIn();

  }



}


