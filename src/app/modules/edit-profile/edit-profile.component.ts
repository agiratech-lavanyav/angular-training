import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, Routes } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { EmployeeTableRoutingModule } from '../employee-table/employee-table-routing.module';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  empUpdate: any;
  empList: any;
  updateValue: any;
  employeeUpdate: any;
  name: any;

 
  constructor(public dialogRef: MatDialogRef<EditProfileComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private route:Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  details = this.formBuilder.group({
    name: [(this.data[0].name),[Validators.required]],
    gender:[(this.data[0].gender),[Validators.required]],
    yr_of_exp: [(this.data[0].yr_of_exp),[Validators.required]],
    dob: [(new Date(this.data[0].dob)),[Validators.required]],
    department: [(this.data[0].department),[Validators.required]],
    email: [(this.data[0].email),[Validators.required]],
    contact: [(this.data[0].contact),[Validators.required]],
  });

  // getErrorMessage() {
  //   return this.name.hasError('required') ? 'You must enter a value' :
  //       this.name.hasError('name') ? 'Not a valid name' :
  //           '';
  // }

  saveDetail(){
    this.empUpdate = JSON.parse(localStorage.getItem('item')!);

    this.empList = this.empUpdate.findIndex((element:any) => {return element.empID == this.data[0].empID});

    // var index: any = this.empUpdate.indexOf(this.empList);

    // console.log("Index is",index);

    var updateValue: any = {
      position : this.empUpdate[this.empList].position,
      empID : this.empUpdate[this.empList].empID,
      name : this.details.controls['name'].value,
      gender : this.details.controls['gender'].value,
      dob : this.details.controls['dob'].value,
      department : this.details.controls['department'].value,
      yr_of_joining : this.empUpdate[this.empList].yr_of_joining,
      email : this.details.controls['email'].value,
      yr_of_exp : this.details.controls['yr_of_exp'].value,
      contact : this.details.controls['contact'].value,
      image : this.empUpdate[this.empList].image,
      isEdit : this.empUpdate[this.empList].isEdit,
    };

    this.empUpdate[this.empList] = updateValue;
    localStorage.setItem('item',JSON.stringify(this.empUpdate));
    this.empUpdate = JSON.parse(localStorage.getItem('item')!);

    this.dialogRef.close();

    // isUpdate: true; 
    // window.location.reload();

    // this.route.navigate(['/details/',this.empList.empID]);
  }
  
}
