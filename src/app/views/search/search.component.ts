import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  users:any[] =[];

    constructor(private api:ApiService) {
        this.api.get('users').subscribe((response:any[])=>{
            this.users= response;
            console.log(this.users);
        });

     }

    ngOnInit(): void { }
}
