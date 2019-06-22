import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { UserService } from 'src/app/services/usr.service';
import {Router} from "@angular/router";


@Component({
    selector: 'app-generador',
    templateUrl: './generador.component.html',
    styleUrls: ['./generador.component.css']
})
export class GeneradorComponent implements OnInit {
 
    agregar$ : Subject<any> = new Subject();

    departamentos= [];
    habilitadoBorrar=false;
    selected = [];
    valorEscrito:string="";



    constructor(private usrServicio:UserService,private redirect:Router) { 
        this.agregar$.subscribe((agregar:any)=>{
      
           console.log(agregar);

            //Agrego esto para verificar si el usuario esta logueado, ** quitar el console al publicar **
            // console.log('usrServicio: '+ usrServicio.getToken());
            // if(usrServicio.getToken()){
            //         redirect.navigate(['/dinamico']); //cambiar a otra
            // }
            // else{
            //     redirect.navigate(['/login']);
            // }


           if(agregar['key']==="Enter"){
                console.log(agregar['key']);
                let valorAgregar= agregar['valor'].toUpperCase();

                //Si es diferente de vacio y no existe, lo agregamos
                if(valorAgregar!="" && this.departamentos.indexOf(valorAgregar.toUpperCase())<= -1){
                    
                  let  obj =  {
                        valor:valorAgregar,
                        selected:false
                    };
                    
                    this.departamentos.push(obj);
                    console.log(this.departamentos);


                    ///
                   // agregar['valor']="";
                   this.valorEscrito="";
                }


           }

            });

        };
    

        //Cuando seleccionamos/deseleccionamos
        myClick(depto){
            console.log(depto);
            
            if(depto.selected === true){
                depto.selected = !depto.selected;
            }
            else{
                depto.selected=true;
            }

        
            this.selected = this.departamentos.filter((u)=>u.selected);
            console.table(this.selected);


        }



        eliminar(){
            console.log('eliminando...');
            this.selected = []; 
            this.departamentos = this.departamentos.filter((u)=>!u.selected);
            console.table(this.selected);
            console.table(this.departamentos);
        }


    ngOnInit(): void {

            //Agrego esto para verificar si el usuario esta logueado, ** quitar el console al publicar **
            console.log('GeneradorComponent usrServicio: '+ this.usrServicio.getToken());
            if(this.usrServicio.getToken()){
                    this.redirect.navigate(['/dinamico']); //cambiar a otra
            }
            else{
                this.redirect.navigate(['/login']);
            }



     }

}
