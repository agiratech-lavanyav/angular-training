import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile.service';
import { MyServiceService } from 'src/app/providers/my-service.service';
import { AuthguardGuard } from '../../providers/authguard.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent{
  isLogged : boolean = true;
  constructor(private routes: Router, private profileService: ProfileService, private cd: ChangeDetectorRef,  private myService: MyServiceService){
    //this.isLogged = myService.isAuthenticate;
  }


  

  
  ngOnInit(){

    if(localStorage.getItem("userName")!==null){
      this.isLogged = true;
      this.cd.detectChanges();
    }
    this.profileService.setEmployeeData(); 
  }
  valueEmittedFromChildComponent: string = '';
  parentEventHandlerFunction(valueEmitted: string){
    this.valueEmittedFromChildComponent = valueEmitted;
}

}






