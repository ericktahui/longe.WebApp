import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class RainbowService {

  colors = [
    'darksalmon',
    'cornflowerblue',
    'goldenrod'
  ];

  currentColor = new Subject();

  width = 150;
  styles = {
    'width': `${this.width}px`,
    'background-color': 'goldenrod'
  };

  styleSubject = new Subject();

  constructor() {
    this.emitNewColor();
  }

  emitNewColor() {
    this.currentColor.next(this.getColor());
  }

  getColor(): string {
    const index = Math.floor(Math.random() * this.colors.length);
    return this.colors[index];
  }

  setStyles(styles) {
    this.styleSubject.next(styles);
  }


}
