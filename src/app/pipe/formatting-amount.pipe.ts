import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formattingAmount'
})
export class FormattingAmountPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        const isUjemna = value < 0;
        const absolutna = isUjemna ? value * -1 : value;
        const zaokraglona = (+absolutna).toFixed(2);
        const [calkowita, dziesietne] = zaokraglona.split('.');
        let spacje = '';
        for (let i = 0; i < calkowita.length; i++) {
            if ((calkowita.length - i) % 3 === 0) spacje += ' ';
            spacje += calkowita[i];
        }
        return (isUjemna ? '-' : '') + spacje.trim() + ',' + dziesietne;
    }
}
