import { Component, OnInit,SimpleChange, SimpleChanges,OnChanges } from '@angular/core';
import { Usuario } from 'src/interfaces/usuario';
import { CrudService } from 'src/app/services/crud.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';


@Component({
    selector: 'app-examen',
    templateUrl: './examen.component.html',
    styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit, OnChanges {

    currentuser: Usuario = <Usuario>{};
    usersCreated: Array<Usuario> = Array<Usuario>();
    myForm:FormGroup;

    user ={
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      edad:['',Validators.required]
      //edad:['',Validators.required,Validators.pattern('[1-150]')]
    };

    constructor(private crud: CrudService,private fb:FormBuilder) {

    }


    ngOnChanges(changes: SimpleChanges) {
        const cambioNombre: SimpleChange = changes.nombre;
        const cambioApp: SimpleChange = changes.apellido;
        const cambioEdad: SimpleChange = changes.edad;

        console.log(cambioNombre+' '+cambioApp+' '+cambioEdad);
        //changes.nombre
        this.currentuser.nombre = cambioNombre.currentValue;
        this.currentuser.apellido = cambioApp.currentValue;
        this.currentuser.edad = cambioEdad.currentValue;
    }


    ngOnInit(): void { 
        this.myForm = this.fb.group(this.user);
    }

    crear() {
        console.log('crear')

        console.log('Formulario Valido?:'+this.myForm.valid);

        // if(!this.myForm.valid){
        //     alert('Debe ingresar los valores');
        //   }

       console.log( this.myForm.controls["nombre"].value );

        this.currentuser.nombre = this.myForm.controls["nombre"].value;
        this.currentuser.apellido = this.myForm.controls["apellido"].value;
        this.currentuser.edad = this.myForm.controls["edad"].value;
        

        if( 
             (this.currentuser.nombre == "" || this.currentuser.apellido == "" || this.currentuser.edad == "")
         ||  (this.currentuser.nombre == "" && this.currentuser.apellido == "" && this.currentuser.edad == "") 
         || (this.currentuser.nombre == undefined ||  this.currentuser.apellido == undefined || this.currentuser.edad == undefined)){
            return;
        }

        if (!this.existeUsuario(this.currentuser)) {
            this.usersCreated = this.crud.crearUsuario(this.currentuser);
            this.currentuser = <Usuario>{};
        }
        else
           { alert('El usuario ya existe');}
    }

    borrar() {
        console.log('borrar')

        if (this.currentuser.nombre === "" && this.currentuser.apellido === "" && this.currentuser.edad === "") {
            return;
        }

        if (this.existeUsuario(this.currentuser)) {
            console.log(this.currentuser);
            this.usersCreated = this.crud.borrarUsuario(this.currentuser);
            this.currentuser = <Usuario>{};
        }
    }

    actualizar() {
        console.log('actualizar')

        if (this.currentuser.nombre === "" && this.currentuser.apellido === "" && this.currentuser.edad === "") {
            return;
        }

        if (this.existeUsuario(this.currentuser)) {
            this.usersCreated = this.crud.actualizarUsuario(this.currentuser);
            this.currentuser = <Usuario>{};
        }
    }

    seleccionarUsuario(usuarioSelecionado: Usuario) {
        console.log(usuarioSelecionado);
        this.currentuser = usuarioSelecionado;

    }


    existeUsuario(usr: Usuario) {

        if (this.usersCreated.find(x => x.nombre === usr.nombre
            && x.apellido === usr.apellido
            && x.edad === usr.edad)) {
            return true;
        } else {
            return false;
        }
    }


    /*
    cambiaColor(){

    }
*/


}
