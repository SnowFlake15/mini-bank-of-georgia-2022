import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString, propName) {
    if (value.length === 0) {
      return value;
    }
    return value.filter(item => {
      // console.log(value, filterString, propName);
      // console.log(item[propName].includes(filterString));
      return item[propName].includes(filterString);
    });
  }
}
