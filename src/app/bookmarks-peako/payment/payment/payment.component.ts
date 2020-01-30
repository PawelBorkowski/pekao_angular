import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
    constructor(public authService: AuthService) {}
    user: { title: string };
    ngOnInit() {}
}
