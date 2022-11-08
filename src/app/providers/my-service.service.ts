import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor( private routes: Router) { }
  isAuthenticate = false;

login(){
  if (localStorage.getItem("userName")!=null) 
  {
    this.isAuthenticate = true;
    return this.isAuthenticate;
  }
  else
  {
  this.isAuthenticate = false;
  return this.isAuthenticate;
  }
}
logout(){
  localStorage.clear();
  this.isAuthenticate = false;
  this.routes.navigate(['']);
}
}



