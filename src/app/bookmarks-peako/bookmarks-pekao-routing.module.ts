import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../login/auth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: './home-page/home-page.module#HomePageModule'
    },

    {
        path: 'payment',
        loadChildren: './payment/payment.module#PaymentModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'products',
        loadChildren: './products/products.module#ProductsModule'
    }
    // {
    //   path: 'new-payment',
    //   loadChildren: './new-payment/new-payment.module#NewPaymentModule'
    // },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookmarksPekaoRoutingModule {}
