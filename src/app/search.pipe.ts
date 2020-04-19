import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  public transform(value: any, key: string, term: string) {
    if (term) {
      term = term.toLowerCase();
      return value.filter(function(item) {
        return JSON.stringify(item).toLowerCase().includes(term);
    });
  } else {
     return value;
    }
  }
}
