import { Component, OnInit } from '@angular/core';
import { RainbowService } from './rainbow.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'rainbow-hover',
  template: `
    <div
      class="host"
      [ngStyle]="{'background-color': backgroundColor}"
      (mouseenter)="onMouseEnter()"
      (mouseleave)="onMouseLeave()"
      ></div>`,
  styles: [`
    .host {
      width: 100px;
      height: 100px;
      display: flex;
    }
  `]
})
export class RainbowHoverComponent implements OnInit {

  backgroundColor = 'black';

  constructor(private config: RainbowService) {
    this.config.currentColor.subscribe((data: string) => {
      this.backgroundColor = data;
    });
  }

  ngOnInit(): void { }

  onMouseEnter() {
    this.config.emitNewColor();
  }

  onMouseLeave() {
    this.config.emitNewColor();
  }

}
