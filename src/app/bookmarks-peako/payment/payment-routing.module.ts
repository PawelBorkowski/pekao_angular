import { PaymentComponent } from './payment/payment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPaymentComponent } from './new-payment/new-payment.component';


const routes: Routes = [
  {
    path: '',
    component: PaymentComponent
  },
  // {
  //   path: 'new-payment',
  //   loadChildren: '../new-payment/new-payment.module#NewPaymentModule'
  // },
  {
    path: 'new-payment',
    component: NewPaymentComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
