import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  empID:any;
  data1:any;
  empDetails:any;
  empInd:any;


  constructor(private employeeService: ProfileService, private activeRoute: ActivatedRoute, public dialog: MatDialog, private cd: ChangeDetectorRef ){
    
   }
   

  ngOnInit(): void {

    this.activeRoute.params.subscribe(params=>{
      this.empID = params['empid'];
      this.data1 = this.employeeService.getDetails(this.empID);
      // this.empDetails = JSON.parse(localStorage.getItem('item')!);

      // this.empInd = this.empDetails.filter((element:{empID:any;}) =>element.empID == this.empID);
    });
    this.empDetails = JSON.parse(localStorage.getItem('item')!);
    // localStorage.setItem('item',JSON.stringify(this.empDetails));



    this.empInd = this.empDetails.filter((element:{empID:any;}) =>element.empID == this.empID);


  }
  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "40%";
    dialogConfig.height = "80%";
    this.dialog.open(EditProfileComponent, { data :this.empInd});

    // let demo=this.cd.detectChanges();
  };
}
