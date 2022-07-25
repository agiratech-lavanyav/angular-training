import { Injectable } from '@angular/core';
// import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor() { }
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
}



