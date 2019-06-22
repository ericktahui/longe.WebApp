import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { timestamp } from 'rxjs/operators';

@Directive({
    //los brakets del selecto indican que sólo se puede ocupar como parámetro
    //el selector sin brakes indican que se puede utilizar como un elemento dentro del html
    selector: 'propagacion,[propagacion]',
})
export class PropagacionDirective   {
   

    /*
    @Input() set propagacion(param:any){
        const contexto={
            $implicit:'Default',
            nombre: 'Homero'
        };

        this.vcr.createEmbeddedView(this.tr,contexto);

    } 
*/

@Input() set propagacion(param:any){
    
    //let times=
    const contexto={
        $implicit:'Default',
        nombre: 'Homero'
    };


    // for(let i=0;i<times;i++){
    // this.vcr.createEmbeddedView(this.tr,contexto);
    // }


} 


    constructor(private vcr:ViewContainerRef,private tr:TemplateRef<any>){

    }

 /*
    ngAfterViewInit(): void {
       
       console.log(this.vcr);
       console.log(this.tr);

       const contexto={
           $implicit:'Default',
           nombre: this.nombre
       }

       this.vcr.createEmbeddedView(this.tr,contexto);
       
    } 
    */

}