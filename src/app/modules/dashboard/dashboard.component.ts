import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile.service';
import { AuthguardGuard } from '../../providers/authguard.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent{
  isLogged : boolean = false;
  constructor(private routes: Router, private profileService: ProfileService, private cd: ChangeDetectorRef){
  }


  

  
  ngOnInit(){

    if(localStorage.getItem("userName")!==null){
      this.isLogged = true;
      this.cd.detectChanges();
    }
    this.profileService.setEmployeeData(); 
  }
  
  logout(){
    localStorage.clear();
    this.routes.navigate(['']);
  }

  valueEmittedFromChildComponent: string = '';
  parentEventHandlerFunction(valueEmitted: string){
    this.valueEmittedFromChildComponent = valueEmitted;
}

}






