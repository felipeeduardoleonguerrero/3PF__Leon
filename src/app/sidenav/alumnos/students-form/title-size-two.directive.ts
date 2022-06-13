import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitleSizeTwo]'
})
export class TitleSizeTwoDirective {

  constructor(private el: ElementRef ) {
    el.nativeElement.style.fontSize = '20px';
  }

}
