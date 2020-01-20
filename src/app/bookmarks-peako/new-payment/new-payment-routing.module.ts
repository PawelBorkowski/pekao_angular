
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPaymentComponent } from './new-payment/new-payment.component';


const routes: Routes = [
  {
    path: '',
    component: NewPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPaymentRoutingModule { }
