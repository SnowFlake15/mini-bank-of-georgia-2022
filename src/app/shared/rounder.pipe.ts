import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rounder'
})
export class RounderPipe implements PipeTransform {

  transform(value: number) {
    return value.toFixed(2);
  }

}
