import { PaymentRoutingModule } from './payment-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirtamtionSMSComponent } from './confirtamtion-sms/confirtamtion-sms.component';
import { TransformObjectToArrPipe } from '../../pipe/transform-object-to-arr.pipe';
import { FormattingAmountPipe } from 'src/app/pipe/formatting-amount.pipe';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        PaymentComponent,
        NewPaymentComponent,
        ConfirtamtionSMSComponent,
        TransformObjectToArrPipe,
        FormattingAmountPipe
    ],
    imports: [CommonModule, PaymentRoutingModule, ReactiveFormsModule, ChartsModule]
})
export class PaymentModule {}
