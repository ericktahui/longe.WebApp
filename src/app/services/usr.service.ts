import { Injectable, NgZone } from "@angular/core";
import * as _ from "lodash";
import { GoogleAuthService } from "ng-gapi/lib/GoogleAuthService";
import GoogleUser = gapi.auth2.GoogleUser;
//import GoogleAuth = gapi.auth2.GoogleAuth;
//import { stringify } from "@angular/core/src/util";

import { BehaviorSubject, Observable, Subject } from 'rxjs';
//import { map } from 'rxjs/operators';
//import User from '../../interfaces/user';

import {HttpService} from './http.service';


import { FormGroup } from '@angular/forms';


const folder:string="usuario";


@Injectable()
export class UserService {
    public static  SESSION_STORAGE_KEY: string = "accessToken";
    private user: GoogleUser = undefined;
    public currentGoogleUser: Subject<GoogleUser>;

    constructor(private http:HttpService,
                private googleAuthService: GoogleAuthService, 
                private ngZone: NgZone) {

                    //Inicializamos la variable
                    this.currentGoogleUser = new Subject<GoogleUser>();
    }

    public signIn() {
        this.googleAuthService.getAuth().subscribe((auth) => {
            auth.signIn().then((res) => {
                console.log(res);
                this.signInSuccessHandler(res)
            },
                err => this.signInErrorHandler(err));
        });
    }

    private signInSuccessHandler(res: GoogleUser) {
        this.ngZone.run(() => {
            this.user = res; 
            console.log('+++++++++++++++++++');
            console.log(this.user);
            sessionStorage.setItem(UserService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token);
            console.log(sessionStorage.getItem(UserService.SESSION_STORAGE_KEY));
            console.log('+++++++++++++++++++');
            
            //Emitimos el usuario Google que inicia sesión
            this.currentGoogleUser.next(this.user);
        });
    }

 
    public signOut():void{
        console.log('Cerrando sesión');
        this.singOutHandler();
    }

    private singOutHandler(){
        this.googleAuthService.getAuth().subscribe((auth) => {
            auth.signOut().then(function() {
                console.log('-------------------');
                //console.log(this.user);
                console.log(auth);
                auth.disconnect();
                //sessionStorage.setItem(UserService.SESSION_STORAGE_KEY, null);
                sessionStorage.removeItem(UserService.SESSION_STORAGE_KEY);
                console.log(sessionStorage.getItem(UserService.SESSION_STORAGE_KEY));
                console.log('-------------------');
            },
                err =>{ this.signOutErrorHandler(err)} );
        });
    }
    

    public isUserSignedIn(): boolean {
        console.log('SESSION_STORAGE_KEY:');
        console.log(sessionStorage.getItem(UserService.SESSION_STORAGE_KEY));
        console.log( _.isEmpty(sessionStorage.getItem(UserService.SESSION_STORAGE_KEY)) );

     return !_.isEmpty(sessionStorage.getItem(UserService.SESSION_STORAGE_KEY));
    }


    private signInErrorHandler(err) {
        console.warn(err);
    }

    private signOutErrorHandler(err) {
        console.warn(err);
    }



    public register(formulario:any): Observable<any>{
        
        console.log('usr.service register:')
        console.log(formulario);
       
        let metodo="registeruser";
      
        let objParameters=[{
            "nombre":formulario.nombre,
            "usrSistema":formulario.capoNombre!=undefined && formulario.capoNombre!=null && formulario.capoNombre!=""? formulario.capoNombre : "",
            "correo":formulario.correo,
            "passwSistema":formulario.passwSistema,
            "apPaterno": formulario.apPaterno,
            "apMaterno":formulario.apMaterno,
            "fechaNacimiento":formulario.fechaNacimiento,
            "idClubFrecuentaMas": formulario.idClubFrecuentaMas,
            "sexo":formulario.sexo,
            "token":HttpService.TOKEN_SERVICIO
        }];

         return this.http.postRequest(metodo,objParameters);

    }


    public rescuePass(formulario:any): Observable<any>{
        
        console.log('usr.service rescuePass:')
        console.log(formulario);

        let metodo="rescuePass";
        let passwordRescue={
            "email": formulario.email,
          };
          
         return this.http.postRequest(metodo,passwordRescue);

    }



    public getToken(): string | null {
        let token: string = sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
        if (!token) {
            //throw new Error("no token set , authentication required");
            return null
        }
        return sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
    }


}