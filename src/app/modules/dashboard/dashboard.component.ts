import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile.service';
import { AuthguardGuard } from '../../providers/authguard.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent{
  constructor(private routes: Router, private profileService: ProfileService){
    
  }
  ngOnInit(){
    this.profileService.setEmployeeData();
  }
  logout(){
    localStorage.clear();
    this.routes.navigate(['']);
  }

  
}




