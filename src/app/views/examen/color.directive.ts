import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[colorDirective]',
})
export class ColorDirective { 

  
   colores = [
    'darksalmon',
    'cornflowerblue',
    'goldenrod',
    'green',
    'blue',
    'purple'
  ];

    @HostBinding('style.color') color = 'black';
    @HostListener('click')
    onclick() {
        console.log('click en la directiva');
      let indxColor= Math.ceil(Math.random()*this.colores.length);
      this.color = this.colores[indxColor];
    }


}