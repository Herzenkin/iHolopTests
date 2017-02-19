import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'updown'
})
export class UpDownPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/..?/g, function(symbol) {
      return symbol[0].toUpperCase() + (symbol[1] ? symbol[1] : '');
    });
  }
}
