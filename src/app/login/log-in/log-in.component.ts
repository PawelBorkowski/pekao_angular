import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
    logInForm: FormGroup;

    constructor(public authService: AuthService, private router: Router) {
        this.createForm();
    }

    createForm() {
        this.logInForm = new FormGroup({
            email: new FormControl('ccccc@gmail.com', [Validators.required, Validators.email]),
            password: new FormControl('123456', [Validators.required])
        });
    }

    ngOnInit() {}

    login() {
        console.log(this.logInForm);

        this.authService
            .login(this.logInForm.value)
            .then(() => this.router.navigate(['/payment']))
            .catch(err => console.log(err.message));
    }
}
