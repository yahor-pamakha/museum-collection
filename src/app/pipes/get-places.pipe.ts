import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getPlaces',
})
export class GetPlacesPipe implements PipeTransform {
  transform(value: string[]): string {
    return value && value.length ? `${value.join(',')},` : '';
  }
}
