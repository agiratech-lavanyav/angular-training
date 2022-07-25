import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeTableRoutingModule } from './employee-table-routing.module';
import { EmployeeTableComponent } from './employee-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule} from '@angular/material/autocomplete';






@NgModule({
  declarations: [
    EmployeeTableComponent
  ],
  imports: [
    CommonModule,
    EmployeeTableRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatSortModule,
    MatSelectModule,
    MatAutocompleteModule,
   

    
  ]
})
export class EmployeeTableModule { }
