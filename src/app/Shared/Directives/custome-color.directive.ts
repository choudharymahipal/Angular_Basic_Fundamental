import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomeColor]'
})
export class CustomeColorDirective {

  @Input() appColor: string="red";

  constructor(private el: ElementRef) {
    
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appColor;
    this.el.nativeElement.style.color = "white";
    this.el.nativeElement.style.padding = "15px";
  }

}
