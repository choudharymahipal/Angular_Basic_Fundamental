import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customeWordCount'
})
export class CustomeWordCountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
