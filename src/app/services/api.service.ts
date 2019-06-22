import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs'

@Injectable()
export class ApiService {
//apiUrl="https://api.github.com/users";
//apiUrl="https://api.github.com/";
apiUrl ="https://jsonplaceholder.typicode.com/"


sujeto= new Subject();


constructor(private http:HttpClient){

}

get(endpoin:string): Observable<any>{
    return this.http.get(`${this.apiUrl}${endpoin}`);
}

}