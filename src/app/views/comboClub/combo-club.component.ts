import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'combo-club',
    templateUrl: './combo-club.component.html',
})
export class ComboClubComponent implements OnInit {
    valorSeleccionado:string="Seleccione...  ";
    opciones =[];


    constructor() { 


    }


    
    ngOnInit(): void { }

    seleccionar(valor){
        console.log(valor);
        this.valorSeleccionado = valor;
    }

}
