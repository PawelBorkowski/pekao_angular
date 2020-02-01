import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformObjectToArr'
})
export class TransformObjectToArrPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const values: any[] = [];
    for (let key in value) {
      values.push(value[key]);
    }
    return values;
  }

}
