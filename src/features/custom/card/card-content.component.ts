import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-card-content',
  template: `<ng-content></ng-content>`,
  styles: [``]
})
export class CardContentComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
