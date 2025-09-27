import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
 
  constructor(public http:HttpClient){}
 getallpost(): Observable<any> {
  return this.http.get('https://dummyjson.com/products' );
}

  getsinglepost(id:any):Observable<any>{
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
  }
 
  

