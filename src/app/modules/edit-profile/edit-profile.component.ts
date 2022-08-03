import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, Routes } from '@angular/router';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  empUpdate: any;
  empList: any;

 
  constructor(public dialogRef: MatDialogRef<EditProfileComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private route:Router) { }

  ngOnInit(): void {
  }
  details = new FormGroup({
    'name': new FormControl(this.data[0].name,Validators.required),
    'gender': new FormControl(this.data[0].gender,Validators.required),
    'yr_of_exp': new FormControl(this.data[0].yr_of_exp,Validators.required),
    'email': new FormControl(this.data[0].email,Validators.required),
    'contact': new FormControl(this.data[0].contact,Validators.required)
  });

  saveDetail(){
    this.empUpdate = JSON.parse(localStorage.getItem('item')!);
    this.empList = this.empUpdate.findIndex((element:any) => {return element.empID == this.data[0].empID});
    this.empUpdate[this.empList].name = this.details.controls['name'].value;
    this.empUpdate[this.empList].gender = this.details.controls['gender'].value;
    this.empUpdate[this.empList].yr_of_exp = this.details.controls['yr_of_exp'].value;
    this.empUpdate[this.empList].email = this.details.controls['email'].value;
    this.empUpdate[this.empList].contact = this.details.controls['contact'].value;
    localStorage.setItem('item',JSON.stringify(this.empUpdate));
    this.route.navigate(['/employee-table']);
    this.dialogRef.close();
  }
}
