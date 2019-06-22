import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'custom-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() message;
  @Output() closing = new EventEmitter();

  constructor(private config: ConfigService) { }

  ngOnInit(): void { }

  close() {
    this.closing.emit(true);
    this.config.percentSubject.next(0);
  }
}
