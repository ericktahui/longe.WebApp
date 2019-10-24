import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService  {

    //Deesarrollo
    // rutaRaiz: string = "http://10.1.50.122:8079/longe/api/public/api/";
    //  rutaRaiz: string = "http://localhost:8079/longe/api/public/api/";
    

    //Producción
     rutaRaiz: string = "https://longe.olinrobotclub.com/api3/public/api/";
  

    timeout: number = 15 * 60 * 1000;
    options: any;
    conf: string = JSON.parse(JSON.stringify(this.timeout.toString()));
    headers: HttpHeaders;

    constructor(private http:HttpClient) { 
        
        this.headers = new HttpHeaders();
       this.headers.append('Accept','application/json');
       this.headers.append('Content-Type','application/json');
       this.headers.append('Origin','localhost:4200');
       //this.headers.append('Access-Control-Request-Method','POST /cors HTTP/1.1' );
       
    }


    //SERVICIO GET
    getRequest = (url: string, customheaders?: string) => this.http.get(`${this.rutaRaiz}${url}`);
   
    //SERVICIO POST
    postRequest = (url: string, parametros?: Object, customheaders?: string) => this.http.post(`${this.rutaRaiz}${url}`, parametros, {headers : this.headers} );

   // postRequest = (url: string, parametros?: Object, customheaders?: string) => this.http.post(`${this.rutaRaiz}${url}`, parametros, {headers: new HttpHeaders({'Access-Control-Allow-Origin':'*','Content-Type':'application/json; charset=utf-8'})}  );
   
   // postRequest2 = (url: string, metodo:string, parametros?: Object, customheaders?: string) => this.http.post(`${this.rutaRaiz}$${url}`, parametros, {headers: new HttpHeaders({'':''})} );



}
