import { Component, OnInit, Output } from '@angular/core';
//import { GoogleAuthService } from 'ng-gapi';
import { UserService } from 'src/app/services/usr.service';
import { GoogleApiService } from 'ng-gapi';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationCustomService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { first } from 'rxjs/operators';




//import {HttpBatcher } from "ngx-http-batcher";

@Component({
  selector: 'login-app',
  templateUrl: './login.component.html',
  styles: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() estaFirmado: boolean = false;

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  userloginValidators = {
    username: ['', Validators.required],
    password: ['', Validators.required]
  };


  constructor(private formBuilder: FormBuilder,
    private redirect: Router,
    private userService: UserService,
    private authCustom: AuthenticationCustomService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private gapiService: GoogleApiService) {

    // First make sure gapi is loaded can be in AppInitilizer
    this.gapiService.onLoad().subscribe();

  

  }

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => { });
    this.isLoggedIn();
    this.loginForm = this.formBuilder.group(this.userloginValidators);

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }


  //getter para facil acceso a los form fields
  get f() { return this.loginForm.controls; }


 //Inicia sesion con usuario y password
  onSubmit() {
    console.log(this.loginForm);
    this.submitted = true;

    console.log('Formulario invalido?: ' + this.loginForm.invalid)

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    //Verificamos si el usuario ya inició sesión con google
    //this.estaFirmado

    //PENDIENTE****

    let username=this.authCustom.encriptar(this.f.username.value);
    let password= this.authCustom.encriptar(this.f.password.value);

    this.authCustom.login(username,password )
      .pipe(first())
      .subscribe(
        (data) => {
          console.log('Retorno a la Vista login:');
          console.log(data);
          this.loading = false;
         // this.redirect.navigate([this.returnUrl]);
          this.redirect.navigate(['/user']);
        },
        error => {
          //this.alertService.error(error);
          this.loading = false;
          this.redirect.navigate(['/error']);
        });

  }



  /* Verifica si el usuario ya Inició sesion */
  public isLoggedIn(): void {

    //Verificación si inició sesión con google
    console.log('isLoggedIn...');
    let se: boolean = this.userService.isUserSignedIn();
    console.log('se:' + se);
    console.log('<::::::::::::::::::::::::>');
    this.estaFirmado = se;

    //Verificamos si no inicio sesion con usuario y password
    if(!this.estaFirmado)
    {
      let currentUser = this.authCustom.currentUserValue;
      console.log('currentUser: ');
      console.log(currentUser);
    }



  }


  /*
    public signIn() {
      console.log('signIn...'); 
      this.userService.signIn();
     this.redirect.navigate(['/user']); // redirecion a una de Bienvenida
  
  }
  */

  public signIn() {
    console.log('signIn...');
    this.userService.signIn();
    //  this.redirect.navigate(['/user']); // redirecion a una de Bienvenida

    this.userService.currentGoogleUser.subscribe((googleUsr) => {
      console.log('currentGoogleUser:');
      console.log(googleUsr);
      this.redirect.navigate(['/user']); // redirecion a una de Bienvenida
    }, error => {
      this.redirect.navigate(['/error']); // redirecion a una pagina de error de inicio de sesion con google
    }
    );


  }

  public signOut() {
    console.log('signOut...');
    this.userService.signOut();
    this.redirect.navigate(['/despedida']); // redirecion a una de despedida 

  }





}