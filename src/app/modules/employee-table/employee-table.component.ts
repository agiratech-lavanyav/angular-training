import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { MatSort,Sort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { ProfileService } from 'src/app/profile.service';


@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent {
  displayedColumns = ['select','position', 'empID','name','gender','dob','department','yr_of_joining','email','contact'];

  constructor(private employeeService: ProfileService){}
  empTabDataSource = new MatTableDataSource<employeeDetails>(this.employeeService.ELEMENT_DATA);
  selection = new SelectionModel<employeeDetails>(true, []);



  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.empTabDataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.empTabDataSource.data.forEach(row => this.selection.select(row));
  }

  // Autocomplete for gender section

  empGender = new FormControl();
  empDepartment = new FormControl();

  options = [
    'Male',
    'Female',
  ];
  values = [
    'Analyst',
    'Developer',
    'Development',
    'Engineer',
    'Manager',
    'Management',
    'Tester',
  ];

  filteredOptions: Observable<string[]> | undefined;
  filterOptions: Observable<string[]> | undefined;

  // filter for employee table

  idFilter=  new FormControl();
  nameFilter= new FormControl();

  filteredValues = {
    position: '', empID:'', name: '',gender:'', dob:'', department:'', yr_of_joining:'', email:'', contact:''};

    ngOnInit() {

      this.idFilter.valueChanges.subscribe((idFilterValue) => {
        this.filteredValues['empID'] = idFilterValue;
        this.empTabDataSource.filter = JSON.stringify(this.filteredValues);
      });
  
      this.nameFilter.valueChanges.subscribe((nameFilterValue) => {
        this.filteredValues['name'] = nameFilterValue;
        this.empTabDataSource.filter = JSON.stringify(this.filteredValues);
      });

      // this.empGender.valueChanges.subscribe((empGenderValue)=>{
      //   this.filteredValues['gender'] = empGenderValue;
      //   this.empTabDataSource.filter = JSON.stringify(this.filteredValues);
      // });
      
      this.empDepartment.valueChanges.subscribe((empDepartmentValue)=>{
        this.filteredValues['department'] = empDepartmentValue;
        this.empTabDataSource.filter = JSON.stringify(this.filteredValues);
      });

      this.empTabDataSource.filterPredicate = this.customFilterPredicate();

      this.filteredOptions = this.empGender.valueChanges      //for gender (autocomplete)
      .pipe(
        startWith(''),
        map((val: string) => this.filterGender(val))
      );
      this.filterOptions = this.empDepartment.valueChanges      //for department (autocomplete)
      .pipe(
        startWith(''),
        map((val: string) => this.filterDepartment(val))
      );

    }

    filterGender(val: string): string[] {                                 //for gender (autocomplete)
      return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }

    filterDepartment(val: string): string[] {                             //for department (autocomplete)
      return this.values.filter(value =>
      value.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }

  
    applyFilter(filter: any) {                                             //filter for name and id
      this.empTabDataSource.filter = JSON.stringify(this.filteredValues);
    }

    customFilterPredicate() {
      const myFilterPredicate = (data: employeeDetails, filter: string): boolean => {
       
      let searchString = JSON.parse(filter);
        return data.empID.toString().trim().indexOf(searchString.empID) !== -1 &&
          data.name.toString().trim().toLowerCase().indexOf(searchString.name.toLowerCase()) !== -1 &&
          // data.gender.toString().trim().toLowerCase().indexOf(searchString.gender.toLowerCase()) !== -1 &&
          data.department.toString().trim().toLowerCase().indexOf(searchString.department.toLowerCase()) !== -1;
      }
      return myFilterPredicate;
     }
  
  //  pagination for employee table

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  // sorting for employee table

  @ViewChild('employeeTableSort') employeeTableSort = new MatSort();


ngAfterViewInit() {

  this.empTabDataSource.paginator = this.paginator;

  this.employeeTableSort.disableClear = true;
  this.empTabDataSource.sort = this.employeeTableSort;

}
}

  // constructor() { }

  // ngOnInit(): void {
  // }

export interface employeeDetails {
    position: number;
    empID: number;
    name: string;
    gender:string;
    dob: any;
    department: string;
    yr_of_joining: number;
    email: any;
    contact: number;
    image: any;
}

  
  

				



