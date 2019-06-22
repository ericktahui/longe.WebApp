import { Component, OnInit, Output } from '@angular/core';
//import { GoogleAuthService } from 'ng-gapi';
import { UserService } from 'src/app/services/usr.service';
import { GoogleApiService } from 'ng-gapi';
import {Router} from "@angular/router";
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AuthenticationCustomService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
//import { first } from 'rxjs/operators';


//import {HttpBatcher } from "ngx-http-batcher";

@Component({
  selector: 'googlelogin-app',
  templateUrl: './google.login.component.html',
  styles:['./google.login.component.css']
})
export class GoogleLoginComponent implements OnInit {
 
@Output() estaFirmado:boolean=false;

loginForm : FormGroup;
loading = false;
submitted = false;
returnUrl: string;

userloginValidators ={
  username:['',Validators.required],
  password:['',Validators.required]
};

// Validators.minLength(6)

  constructor(private formBuilder: FormBuilder,
              private redirect: Router,
              private userService: UserService,
              private authCustom: AuthenticationCustomService,
              private alertService:AlertService,
              private route: ActivatedRoute,
              private gapiService: GoogleApiService) {

     // First make sure gapi is loaded can be in AppInitilizer
     this.gapiService.onLoad().subscribe();


    }

  ngOnInit() {

        this.route.fragment.subscribe((fragment) => { });
        this.isLoggedIn();
        this.loginForm =this.formBuilder.group(this.userloginValidators);
    
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }



  public isLoggedIn(): void {
    console.log('isLoggedIn...');
    let se : boolean=this.userService.isUserSignedIn();
    console.log('se:'+se);
    console.log('<::::::::::::::::::::::::>');
    this.estaFirmado=se;
   
    // if(this.estaFirmado)
    //   this.redirect.navigate(['/login']); //A sus datos
    // else
    //   this.redirect.navigate(['/login']); //A Cerrar Sesion  

  }



  public signIn() {
    console.log('signIn...'); 
    this.userService.signIn();
  // this.redirect.navigate(['/examen']); // redirecion de prueba, despues cambiarla a una de Bienvenida

}

public signOut(){
  console.log('signOut...');
  this.userService.signOut();
  this.redirect.navigate(['/search']); // redirecion de prueba, despues cambiarla a una de despedida 
            
}


}