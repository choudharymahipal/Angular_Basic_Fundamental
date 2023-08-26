import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customeWordCount'
})
export class CustomeWordCountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.trim() == "") {
      return 0;
    } else {
      return value.trim().split(/\s+/).length;
    }
  }

}
