import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {map,filter,switchMap,combineLatest} from 'rxjs/operators';


interface Persona{
  nombre:string;
  apellido:string;
  edad:number;
  permiso:boolean;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {


  myPersona: Persona | number  = <Persona>{};


 permisos :boolean= true;

  constructor(private api:ApiService) {
      console.log(this.api.apiUrl);

    this.api.sujeto
      .pipe(
        filter((d: Persona) => {
           console.log(d.permiso);
          return d.permiso;
        }),
        map((d: Persona) => {
          //console.log(d.nombre);
          return d.nombre;
        }),
        switchMap((endpoint:string)=>{
            return this.api.get(endpoint);
        }),
        combineLatest(
            this.api.get('users/mojombo'),
            this.api.get('users/ericktahui'),
            this.api.get('users/spunbeat'),
        ),
        map((array: any[])=>{
           return {
             users: array[0],
             mojombo: array[1],
             maestro: array[2],
             yo: array[3]
           };

        })

      )
      .subscribe((data) => {
        console.log(data);
        },
        error=>{
          console.log(error);
        },
        ()=>{
            console.log('DONE');
        }
        );





      //});



   }

  ngOnInit(): void {}


  changePermission(){
    //(this.myPersona as Persona).permiso= ! (this.myPersona as Persona).permiso;
   this.permisos = ! this.permisos;

    this.api.sujeto.next({
      nombre:'users',
      apellido: 'tahui',
      edad: 32,
      permiso: this.permisos,
    });
  }


  emitir(){
    console.log('emitiendo....');

    
    this.myPersona=  {
      nombre:'users',
      apellido: 'tahui',
      edad: 32,
      permiso: this.permisos,
    }

    this.api.sujeto.next(this.myPersona);
  }

  fetch(){
  //this.api.getUsers().subscribe(console.log);  //Este si regresa un log

  //this.api.getUsers().subscribe(data=> console.log(data)); //Este si regresa un log


  /*
  this.api.getUsers().subscribe((data:any)=>{
    console.log(data)
  },error=>{
      console.log(error);
  },()=>{
    //Siempre se ejecuta cuando respondió algo y entonces este callback va a dejar de ser escuchado
    console.log('DONE');
  });
*/

}

}
