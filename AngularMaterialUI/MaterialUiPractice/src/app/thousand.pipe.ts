import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousand',
  standalone: true,
})
export class ThousandPipe implements PipeTransform {
  transform(value: any, ...args: any[]): string {
    if (typeof value !== 'string') {
      return value;
    }
    // Your transformation logic here. 
    // This example just returns the value and arguments joined for demonstration.
    return `${value} ${args.join(' ')}`;
  }
}
