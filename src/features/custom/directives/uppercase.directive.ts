import { Directive, HostBinding, HostListener } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[customUppercase]',
})
export class CustomUppercaseDirective {
  @HostBinding('style.text-transform') textTransform = this.config.format;
  clicks = 0;
  @HostListener('click', ['$event'])
  onclick(event) {
    const { target } = event;
    this.clicks++;
  }
  constructor(private config: ConfigService) {
    config.formatSubject.subscribe((data: string) => {
      this.textTransform = data;
    });
  }

}
