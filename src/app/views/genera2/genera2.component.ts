import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
    selector:'app-genera2',
    templateUrl: './genera2.component.html',
    styleUrls: ['./genera2.component.css']
})
export class Genera2Component implements OnInit{

    agregar$ : Subject<any> = new Subject();

    departamentos= [];
    habilitadoBorrar=false;
    selected = [];
    valorEscrito:string="";


    constructor() { 
        this.agregar$.subscribe((agregar:any)=>{
      
           console.log(agregar);


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


    ngOnInit(): void { }
}
