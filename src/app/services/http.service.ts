import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import { HttpClientModule, HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs';

//const headers2 = new Headers().set('Access-Control-Allow-Origin',"http://localhost:4200");

@Injectable()
export class HttpService  {

  
    //https://longe.olinrobotclub.com/api/public/usuario/1
    
    rutaRaiz: string = "https://longe.olinrobotclub.com/api/public/api/";

    //ruta: string = "http://localhost:4200/api/public/";
    origin: string = "http://localhost:4200";

    timeout: number = 15 * 60 * 1000;
    options: any;
    conf: string = JSON.parse(JSON.stringify(this.timeout.toString()));
    headers: HttpHeaders;

    constructor(private http:HttpClient) { 
        
        this.headers = new HttpHeaders();
        //this.headers.append('Origin',origin);
        //this.headers.append('Access-Control-Allow-Origin',origin);
       // this.headers.set('Access-Control-Allow-Origin',this.origin);
       // this.headers.set('Content-Type',['application/json','text/html; charset=utf-8','application/x-www-form-urlencoded']);
       // this.headers.set('Content-Type',['text/plain']);
       this.headers.set('Content-Type','application/json');
  
       // console.log('headers=>');
       // console.log(this.headers);
    }


    //SERVICIO GET
    getRequest = (url: string, customheaders?: string) => this.http.get(`${this.rutaRaiz}${url}`);
   
    //SERVICIO POST
    postRequest = (url: string, parametros?: Object, customheaders?: string) => this.http.post(`${this.rutaRaiz}${url}`, parametros, {headers : this.headers} );

    // postRequest = (url: string, parametros?: Object, customheaders?: string) => this.http.post(`${this.rutaRaiz}${url}`, parametros, {headers: new HttpHeaders({'Access-Control-Allow-Origin':'*','Content-Type':'application/json; charset=utf-8'})}  );
   
   // postRequest2 = (url: string, metodo:string, parametros?: Object, customheaders?: string) => this.http.post(`${this.rutaRaiz}$${url}`, parametros, {headers: new HttpHeaders({'':''})} );



}
