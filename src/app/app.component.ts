import { DatabaseService } from './services/db.service';
import { Component } from '@angular/core';
import User from '../interfaces/user';
import { TextTransform } from '../interfaces/options';

import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  currentUser = <User>{};
  options = TextTransform;

  alertMessage = 'Listo';

  showAlert = false;

  percent = 0;

  constructor(
    public db: DatabaseService,
    private config: ConfigService
  ) { }

  select(user: User) {
    this.currentUser = user;
  }

  changeTextTransform(option: string) {
    this.config.formatSubject.next(option);
  }

  fileStarting() {
    this.alertMessage = 'Iniciando';
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 300);
  }

  filePaused() {
    this.alertMessage = 'Pausado';
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 300);
  }

  fileFinished() {
    this.alertMessage = 'Finalizado';
    this.showAlert = true;

  }

  fileIncrementing(param) {
    console.log(param);
  }

  toggleShowAlert() {
    this.showAlert = !this.showAlert;
  }

  closeAlert() {
    this.showAlert = false;
  }

  onMouseEnter() {
    console.log('Enter');
  }

}
