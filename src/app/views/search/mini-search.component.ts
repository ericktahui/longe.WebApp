import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime,distinctUntilChanged} from 'rxjs/operators';


@Component({
    selector: 'app-mini-search',
    templateUrl: './mini-search.component.html',
    styleUrls: ['./mini-search.component.css']
})
export class MiniSearchComponent implements OnInit {

    @Input() users=[];

    results =[];
    selected =[];

    stringSearch$: Subject<string> = new Subject();

    constructor() { 
        this.stringSearch$.pipe(
            debounceTime(400),
            distinctUntilChanged()
        ).subscribe((value:string)=>{
            //console.log(value);
            this.results = this.users.filter((user)=>{
                    const username= user['name'].toUpperCase();
                    return username.indexOf(value.toUpperCase())>-1

            });

        });
    }

    ngOnInit(): void { }


 meEstanSeleccionando({source}){
console.log(source.selectedOptions.selected);
}

//Forma alterna no tan PRO
meEstanSeleccionando2(event){

    //Opcion A creando un clon
    //const {source} =event.source;

    //Opcion B  creando un clon 
    const {source} =event.source;
    const { ajijo} =event.ajijo;

    console.log(source)
    }


/*
//anterior
    myClick(user){
     
        if(user.selected === true){
            user.selected = !user.selected;
        }
        else{
            user.selected=true;
        }

        const seleccionados = this.users.filter((u)=>u.selected);
        console.table(seleccionados);

    }
*/


//Segunda forma
myClick(user){
//Nota: Como "user" es un objeto que no es readonly se le pueden agregar nuevas propiedades;
// en este caso la nueva propiedad es 'selected' , primero verificamos que no sea undefined if(user.selected === true)

    if(user.selected === true){
        user.selected = !user.selected;
    }
    else{
        user.selected=true;
    }

    this.selected = this.users.filter((u)=>u.selected);
    console.table(this.selected);

}




    dioClick(e:any){
        //console.log(e);
        console.log(e.target['className']);
        console.log(e.target['text']);

     

    }


    claseClick(e){

      let estilo:string="noSeleccionado";

        if(e.target['className']=='noSeleccionado')
        {estilo="siSeleccionado";}
        else{
            estilo="noSeleccionado";
        }

        return estilo;
    }

}
