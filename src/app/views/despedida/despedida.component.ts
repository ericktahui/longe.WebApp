import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bye',
    templateUrl: './despedida.component.html',
    //styleUrls: ['./despedida.component.css']
})
export class DespedidaComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
        console.log('despedida...');
     }
}
