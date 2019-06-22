import { Injectable } from '@angular/core';
import { Usuario } from 'src/interfaces/usuario';


@Injectable()
export class CrudService {

   // usersCreated: Usuario[] = <Usuario[]>{};
   //users:any[] =[];

   usersCreated: Array<Usuario> =  Array<Usuario>();

    crearUsuario(user: Usuario) :Array<Usuario> {
        console.log('CRUD crear')
        
        var Unobj:Usuario =  {
            nombre:user.nombre,
            apellido : user.apellido,
            edad: user.edad
        };

         if(user != undefined ) { //&& this.usersCreated.indexOf(user)<= -1){

              this.usersCreated.push(user);
              console.table(this.usersCreated);
            }
            return this.usersCreated;

    }

    borrarUsuario(usr: Usuario) :Array<Usuario> {
        console.log('CRUD borrar')


       var indx = this.usersCreated.findIndex(x => x.nombre === usr.nombre
                                      && x.apellido === usr.apellido
                                      && x.edad === usr.edad);

        console.log(indx);

       this.usersCreated.splice(indx,1);
      
        console.table(this.usersCreated);
        return this.usersCreated;
    }

    

    actualizarUsuario(usr: Usuario) :Array<Usuario>  {
        console.log('CRUD actualizar')

     

        var objUsr   = this.usersCreated.find(x => x.nombre === usr.nombre
                && x.apellido === usr.apellido
                && x.edad === usr.edad)
       

        var indx = this.usersCreated.findIndex(x => x.nombre === objUsr.nombre
                    && x.apellido === objUsr.apellido
                    && x.edad === objUsr.edad);


        console.log(indx);



        console.table(this.usersCreated);
        return this.usersCreated;
    }


}
