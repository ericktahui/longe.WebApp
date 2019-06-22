import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-estructural',
    templateUrl: './estructural.component.html',
    styleUrls: ['./estructural.component.css']
})
export class EstructuralComponent implements OnInit {
  
personaje={
    nombre:'Maggie',
    apellido: 'Simpson'
}


 contextoExterno={
        $implicit:'Default',
        nombre: 'Bart'
    }
  
    constructor() { }

    ngOnInit(): void { }
}
