import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitleSize]'
})
export class TitleSizeDirective {

  constructor(private el: ElementRef ) {
    el.nativeElement.style.fontSize = '20px';
  }

}
