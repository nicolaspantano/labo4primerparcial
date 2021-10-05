import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bienvenido'
})
export class BienvenidoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
