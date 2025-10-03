import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { Api } from './api';

export const interceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const api = inject(Api)
  let token = localStorage.getItem('token')
  if(localStorage.getItem('token')){
req = req.clone(
  {headers : req.headers.set("Authorization" , `Bearer ${token}` )}
)
  }
   console.log(token);
  return next(req);
 
  
};