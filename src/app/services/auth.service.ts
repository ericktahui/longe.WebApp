import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import  User  from 'src/interfaces/user';

import {HttpService} from './http.service';
import { stringify } from '@angular/core/src/render3/util';

@Injectable({ providedIn: 'root' })
export class AuthenticationCustomService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private servicioHttp: HttpService,private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User | null {
        return this.currentUserSubject.value;
    }



    login(username: string, password: string): Observable<any>{
       
        console.log('Entrando a login de auth.service...');

        username=this.desEncriptar(username);
        password= this.desEncriptar(password);


/*

        //Inicio Prueba ----

        let objRespuesta=[{
            'nombre':'erick55',
            'token':'XCVVBRFDFDEEEQWETR9483859',
            'error': '',
            'resultado':'true'
        }];

        
        let miObservable= new Observable(observer=>{
        setTimeout(() => {
            observer.next(objRespuesta)
        }, 500);

        });

        //Esto será solo para probar
        if(username=='erick' && password=='pruebas')
        {
            //return miObservable;
            return miObservable
            .pipe(map((user: Object| any) => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));


        }
        

        //Termino prueba----------

*/


        let objPArameters=[{
            "usrSistema":username,
            "passwSistema":password,
            "token":HttpService.TOKEN_SERVICIO
        }];
        
        //Esperemos a que el servicio WEb funcione
       return this.servicioHttp.postRequest('login',objPArameters)
            .pipe(map((respuesta: Object| any) => {
                // login successful if there's a jwt token in the response
                //if (user && user.token) {
                if (respuesta && respuesta.exito) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(respuesta));
                    this.currentUserSubject.next(respuesta);
                }
                else{
                    console.log(respuesta.error);
                }

                return respuesta;
            }));
    


    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }


    public encriptar(cadenaEntrada:string):string{
       let cadEncriptada:string;
       cadEncriptada=cadenaEntrada;

       return cadEncriptada
    }


    
    public desEncriptar(cadEncriptada:string):string{
        let valorReal:string;
        valorReal=cadEncriptada;
 
        return valorReal
     }


}