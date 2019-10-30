import {Component,Output, EventEmitter} from '@angular/core';
//import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker-popup.html'
})
export class NgbdDatepickerPopup {
  modelFecha;
  @Output() emitirFecha = new EventEmitter<any>();


  change(event) {
    console.log('emitir cambio en fecha')
    console.log(event);
    this.emitirFecha.emit(event);
  }

}