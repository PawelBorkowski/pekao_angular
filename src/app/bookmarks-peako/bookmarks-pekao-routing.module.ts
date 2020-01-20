import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: './products/products.module#ProductsModule'
  },

  {
    path: 'payment',
    loadChildren: './payment/payment.module#PaymentModule'
  },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule'
  },
  // {
  //   path: 'new-payment',
  //   loadChildren: './new-payment/new-payment.module#NewPaymentModule'
  // },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarksPekaoRoutingModule { }
