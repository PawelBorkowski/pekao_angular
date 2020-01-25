import { PaymentRoutingModule } from './payment-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirtamtionSMSComponent } from './confirtamtion-sms/confirtamtion-sms.component';



@NgModule({
  declarations: [PaymentComponent, NewPaymentComponent, ConfirtamtionSMSComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    ReactiveFormsModule
  ]
})
export class PaymentModule { }
