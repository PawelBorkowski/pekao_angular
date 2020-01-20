import { PaymentRoutingModule } from './payment-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';



@NgModule({
  declarations: [PaymentComponent, NewPaymentComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
