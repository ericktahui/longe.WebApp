import { Component, OnInit } from '@angular/core';
import User from 'src/interfaces/user';
//import { AuthGuard } from 'src/app/_guards/auth.guard';


@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    //providers:[AuthGuard]
})
export class UserComponent implements OnInit {
  
    userLogged : User | null = <User>{};
    constructor() { }

    ngOnInit(): void { }
}
