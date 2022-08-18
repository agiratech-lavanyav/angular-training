import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private routes: Router){}
  title = 'loginpage';

  isLogged :boolean = false;

  ngOnInit(): void {
  if(localStorage.getItem("userName")===null){
    this.isLogged = false;
  }
  else if(localStorage.getItem("userName")!==null){
    this.isLogged = true;
  }
}
  logout(){
    localStorage.clear();
    this.routes.navigate(['']);
    this.isLogged = false;
  }
}
