import { RainbowService } from './rainbow.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'rainbow-listener',
  template: `
    <div
      class="host"
      [ngStyle]="styles"
      (click)="changeStyles()">
    </div>`,
  styles: [`
    .host {
      width: 100px;
      height: 100px;
      background-color: black;
      transition: all ease 0.3s;
    }
  `]
})
export class RainbowListenerComponent implements OnInit {
  backgroundColor = 'black';

  width = 150;
  styles = {};

  constructor(private config: RainbowService) {
    // currentColor
    this.config.currentColor.subscribe((data: string) => {
      this.backgroundColor = data;
    });
    // styles
    this.config.styleSubject.subscribe((data: any) => {
      this.styles = data;
    });
  }

  ngOnInit(): void { }

  getStyles() {
    return this.styles;
  }

  changeStyles() {
    this.config.setStyles({
      width: '300px',
      height: '300px',
      'background-color': 'black'
    });
  }
}
