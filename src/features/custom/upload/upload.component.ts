import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'custom-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit, OnChanges {

  @Output() finished = new EventEmitter();
  @Output() started = new EventEmitter();
  @Output() paused = new EventEmitter();
  @Output() incrementing = new EventEmitter();


  percent = 0;
  interval;

  constructor(private config: ConfigService) {
    this.config.percentSubject.subscribe((data: number) => {
      this.percent = data;
    });
  }

  ngOnInit(): void { }

  /**
   * Comienza el incremento del percent
   */
  start() {
    // iniciado
    this.started.emit(true);
    this.interval = setInterval(() => {
      this.percent += 10;
      this.incrementing.emit(this.percent);
      if (this.percent === 100) {
        clearInterval(this.interval);
        this.finished.emit(true);
      }
    }, 1000);
  }

  /**
   * Detiene el incremento del percent
   */
  pause() {
    this.paused.emit(true);
    clearInterval(this.interval);
  }

  ngOnChanges(changes) {
    console.log(changes);
  }
}


/**
 * 1. Crear servicio
 * 2. Crear component A
 * 3. Crear component B
 * 4. Inyectar servicio en providers del module
 * 5. Inyectamos servicio en
 *  constructores de los componentes A y B
 * 6. Crear propiedad de tipo Subject (extiende un Observable)
 * 7. crear una subscripcion a esta propiedad dentro del
 * constructor del componente / directiva en donde queramos escuchar los cambios
 * 8. emitimos los cambios a la propiedad desde el componente que deseemos mediante el metodo .next()
 */
