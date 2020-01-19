import { LogInComponent } from './log-in/log-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: './products/products.module#ProductsModule'
  // },

  // {
  //   path: 'payment',
  //   loadChildren: './payment/payment.module#PaymentModule'
  // },
  // {
  //   path: 'products',
  //   loadChildren: './products/products.module#ProductsModule'
  // }
  {
    path: '',
    component: LogInComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
