import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-card-header',
  template: `<ng-content></ng-content>`,
  styles: [``]
})
export class CardHeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
