import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public isUserLogged: boolean = false;
    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.authService.isUserLogged$.subscribe(isLogged => {
            this.isUserLogged = isLogged;
        });
    }

    logout() {
        //this.authService.logOut();
        this.authService.logOut().then(() => this.router.navigate(['']));
    }

    login() {
        // this.authService.logIn();
    }
}
