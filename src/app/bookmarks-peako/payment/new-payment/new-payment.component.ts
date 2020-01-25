import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, NgForm } from '@angular/forms';
import * as IBAN from 'iban';
@Component({
    selector: 'app-new-payment',
    templateUrl: './new-payment.component.html',
    styleUrls: ['./new-payment.component.scss']
})
export class NewPaymentComponent implements OnInit {
    @ViewChild('form', { static: true }) form: NgForm;
    newPaymentForm: FormGroup;
    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {}

    createForm() {
        this.newPaymentForm = new FormGroup({
            accNumber: new FormControl('SI 56 1910 0000 0123 438', [Validators.required, this.ValidateIban]),
            amount: new FormControl(null, [Validators.required]),
            recipientsAddress: new FormControl(null),
            title: new FormControl(null, [Validators.required]),
            isStandingOrder: new FormControl(null),
            nameOrder: new FormControl(null, [Validators.required])
        });
    }

    ValidateIban(control: AbstractControl) {
        const isValid = IBAN.isValid(control.value);
        if (isValid) {
            return null;
        }
        return { accNumber: true };
    }

    reactiveSubmit() {
        console.log(this.newPaymentForm);
    }
}
