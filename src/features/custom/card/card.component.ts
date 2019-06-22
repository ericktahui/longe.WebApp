import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'custom-card',
  template: `
    <ng-content select="custom-card-header"></ng-content>
    <hr>
    <ng-content select="custom-card-content"></ng-content>
  `,
  styles: [``]
})
export class CardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
