import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardGuard } from '../../providers/authguard.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent{
  constructor(private routes: Router){}
  logout(){
    localStorage.clear();
    this.routes.navigate(['']);
  }
}




