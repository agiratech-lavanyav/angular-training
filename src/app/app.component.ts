import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { MyServiceService } from './providers/my-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private routes: Router, public myService: MyServiceService ){}
  title = 'loginpage';

  isLogged :boolean = false;

  ngOnInit(): void {
  this.myService.login();
  if(localStorage.getItem("userName")!==null){
    this.isLogged = true;
  }
}
logout(){
  this.myService.logout();
}
  
}
