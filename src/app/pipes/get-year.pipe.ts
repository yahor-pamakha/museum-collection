import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getYear',
})
export class GetYearPipe implements PipeTransform {
  transform(value: string): string {
    const yearRegExp = /(?<=,\s)(ca\.\s)?[0-9]{3,4}/g;
    const matches = value.match(yearRegExp);
    return matches?.length ? matches[matches.length - 1] : '';
  }
}
