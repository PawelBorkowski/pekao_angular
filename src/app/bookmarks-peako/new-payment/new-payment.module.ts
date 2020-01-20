import { NewPaymentRoutingModule } from './new-payment-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPaymentComponent } from './new-payment/new-payment.component';



@NgModule({
  declarations: [NewPaymentComponent],
  imports: [
    CommonModule,
    NewPaymentRoutingModule
  ]
})
export class NewPaymentModule { }
