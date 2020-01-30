import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    user: { surname: string; name: string };
    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.authService.profile$.subscribe(profile => {
            if (!profile) {
                this.user = null;
                return;
            }
            this.user = { surname: profile.profile.surname, name: profile.profile.name };
            console.log(this.user);
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
