import { Component, OnInit ,ViewContainerRef,ViewChild,AfterViewInit, TemplateRef} from '@angular/core';

@Component({
    selector: 'app-dinamico',
    templateUrl: './dinamico.component.html',
    styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent implements OnInit, AfterViewInit {
    
    @ViewChild('tr') trViewChild:TemplateRef<any>;  
    @ViewChild('tr2') tr2ViewChild:TemplateRef<any>;

    permiso:boolean=true;
    colors=['red','blue','green'];
    

    //Es importante que el ojbeto context tenga un elemento llamado $implicit; que es el valor por default
    //$impicit puede ser un objeto,un array, una cadena
    trContext={
        $implicit:{
            nombre:'pikachu'
        },
        poder:'attack trueno',
        hermanos:[
            'Red','Green','Blue'
        ]
    }

    trContextNuevo={
        $implicit:{
            nombre:'goku'
        },
        poder:'Genkidama',
        hermanos:[
            'Red','Green','Blue'
        ]
    }


/*
//O el $implicit podria ser un valor simple y no un objeto 
 trContext={
        $implicit:'pikachu',
        poder:'attack trueno'
    }


*/


    ngOnInit(): void { }

    ngAfterViewInit(): void {
       console.log(this.trViewChild);
       console.log(this.tr2ViewChild);
      
       //this.vcr.createEmbeddedView(this.trViewChild);
       //this.vcr.createEmbeddedView(this.tr2ViewChild);
    }
    
    constructor(private vcr:ViewContainerRef) { 

    }


    togglePermiso(){
        this.permiso= !this.permiso;

    }

    crear(template:TemplateRef<any>){


        //this.vcr.createEmbeddedView(template,this.trContext);

        this.vcr.createEmbeddedView(template,this.trContextNuevo);

    }

    crear1(){
        this.vcr.createEmbeddedView(this.trViewChild);
    }

    crear2(){
        this.vcr.createEmbeddedView(this.tr2ViewChild);
    }
}
