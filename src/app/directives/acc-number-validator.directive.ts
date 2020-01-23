import { Directive } from '@angular/core';
import * as IBAN from 'iban';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appAccNumberValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: AccNumberValidatorDirective, multi: true }]
})
export class AccNumberValidatorDirective implements Validator {
    constructor() {}
    validate(control: AbstractControl): ValidationErrors | null {
        const isValid = IBAN.isValid(control.value);
        if (isValid) {
            return null;
        }
        return { accountNumber: true };
    }
}
