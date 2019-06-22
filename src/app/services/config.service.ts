import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ConfigService {
  version = 1;
  format = 'lowercase';
  formatSubject = new Subject();
  percent = 0;
  percentSubject: Subject<any> = new Subject();
  constructor() {
    this.formatSubject.next(this.format);
    this.percentSubject.next(this.percent);
  }
}
