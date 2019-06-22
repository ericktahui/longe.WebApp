import { RainbowService } from './rainbow.service';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[rainbowClick]',
})
export class RainbowClickDirective {
  @HostBinding('style.color') color = 'black';
  @HostListener('click')
  onclick() {
    this.color = this.config.getColor();
  }

  constructor(private config: RainbowService) {}
 }
