import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

 
  transform(value: any[]): any[] {
    if (!value || !Array.isArray(value)) {
      return value;
    }

    return value.slice().reverse();
  }
}
