import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appAttrHighlight]'
})
export class AttrHighlightDirective {

  @Input('appAttrHighlight') userColor: string = "red";

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.userColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  
}
