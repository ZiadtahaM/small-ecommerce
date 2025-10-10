import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Api {
  userid: any = localStorage.getItem('userid');
  username:null|string=null
    isLogin = (localStorage.getItem('token')) ? true : false
 data:any={}
 status:any=null
 confirmPassword=null
 email:null|string=null
 password:null|string=null
  constructor(public http:HttpClient){}
 getallpost(): Observable<any> {
  return this.http.get('https://dummyjson.com/products' );
}

  getsinglepost(id:any):Observable<any>{
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
  regiter(model:any):Observable<any>{
    return this.http.post('https://full.faedg.com/public/api/client/customer_register',model)
  }
  updateprofile(userid: any, updatedData: any): Observable<any> {
  return this.http.put(`https://full.faedg.com/public/api/client/profile/${userid}`, updatedData);
}
getgov():Observable<any>{
  return this.http.get('https://full.faedg.com/public/api/governorates/65')
}
list():Observable<any>{
  return this.http.get('https://full.faedg.com/public/api/client/customer_address_book')
}
getcity(id:any):Observable<any>{
  return this.http.get(`https://full.faedg.com/public/api/cities/${id}`)
}
addadress(body:any):Observable<any>{
  return this.http.post('https://full.faedg.com/public/api/client/customer_address_book',body)
}}

  

