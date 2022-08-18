import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { MatSort,Sort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { ProfileService } from 'src/app/profile.service';
import { Output, EventEmitter} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { indexOf } from 'lodash';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class EmployeeTableComponent {
  dataItem:any;
  storedData:any;
  isChecked:boolean=false;
  editableRows: number[]=[];

  @ViewChild('outerSort', { static: true })
  sort: MatSort = new MatSort;
  @ViewChildren('innerSort')
  innerSort!: QueryList<MatSort>;
  @ViewChildren('innerTables')
  innerTables!: QueryList<MatTable<Address>>;

  dataSource!: MatTableDataSource<employeeDetails>;

  usersData: employeeDetails[] = [];
  displayedColumns = ['select','empID','name','gender','dob','department','yr_of_joining','email','contact'];
  displayedColumns2 = ['select-section', 'empID-row2','name-row2','gender-row2','age-row2','department-row2','yr_of_joining-row2','email-row2','contact-row2'];
  innerDisplayedColumns = ['street', 'zipCode', 'city'];
  expandedElement!: employeeDetails | null ;
  empID: any;
  detail: any;
  data1: any;
  
  // empInd: employeeDetails[];


 

  constructor(private employeeService: ProfileService, private routes: Router,  private activeRoute: ActivatedRoute ,private cd: ChangeDetectorRef){
    // localStorage.setItem('item',JSON.stringify(this.employeeService.ELEMENT_DATA));
  }
  editRow(id:number){
    
    if(this.editableRows.indexOf(id) != -1) {
      this.editableRows.splice(this.editableRows.indexOf(id), 1);
    } else {
      this.editableRows.push(id);
    }
  }

  empTabDataSource = new MatTableDataSource<employeeDetails>(JSON.parse(localStorage.getItem('item')!));
  selection = new SelectionModel<employeeDetails>(true, []);
  isTableEdit = false;


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.empTabDataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    // this.isAllSelected() ?
    //     this.selection.clear() :
    //     this.empTabDataSource.data.forEach(row => this.selection.select(row));
    if(this.isChecked) {
      this.isChecked = false;
      this.displayedColumns[1] = 'empID';
      this.displayedColumns[2] = 'name';
      this.displayedColumns2[1] = 'empID-row2';
      this.displayedColumns2[2] = 'name-row2';
    } else {
      this.isChecked = true;
      this.displayedColumns[1] = 'name';
      this.displayedColumns[2] = 'empID';
      this.displayedColumns2[1] = 'name-row2';
      this.displayedColumns2[2] = 'empID-row2';
    }
  }
  
  // Autocomplete for gender section

  empGender = new FormControl();
  empDepartment = new FormControl();

  options = ['Male','Female',];
  values = ['Analyst','Developer','Development','Engineer','Manager','Management','Tester',];
  // expandedRows: number[] = [102];

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

      this.dataItem = JSON.parse(localStorage.getItem('item')!);

      this.dataItem.forEach((user: employeeDetails) => {
        if (user.addresses && Array.isArray(user.addresses) && user.addresses.length) {
          this.usersData = [...this.usersData, {...user, addresses: new MatTableDataSource(user.addresses)}];
        } else {
          this.usersData = [...this.usersData, user];
        }
      });
      this.dataItem = new MatTableDataSource(this.usersData);
      this.dataItem.sort = this.sort;

      
      // this.applyFilter(filterValue:string) {
      //   this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Address>).filter = filterValue.trim().toLowerCase());
      // }

    }
    
    toggleRow(element:employeeDetails) {
      this.expandedElement = this.expandedElement === element ? null : element;
      
      this.cd.detectChanges();
      this.innerTables.forEach((table, indexOf) => (table.dataSource as MatTableDataSource<Address>).sort= this.innerSort.toArray()[indexOf]);
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
// getData(){
//   this.storedData = JSON.parse(localStorage.getItem('item')!); 
//   console.log(this.storedData);
// }
// editOn(){
//   this.isTableEdit = true;
//   this.editableRows = [];
//   console.log(this.editableRows);
//   //e.isEdit = true;
// }
// saveOn(){
//   console.log("comes here");
//   this.storedData = this.empTabDataSource.data;
//   localStorage.setItem('item',JSON.stringify(this.storedData));
//   this.isTableEdit = true;
//   this.isTableEdit= false;
// }

toggleTableEdit() {
  this.editableRows = [];
  this.storedData = this.empTabDataSource.data;
  localStorage.setItem('item',JSON.stringify(this.storedData));
}

logout(){
  localStorage.clear();
  this.routes.navigate(['']);
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
    yr_of_exp:number;
    yr_of_joining: number;
    email: any;
    contact: number;
    image: any;
    isEdit:boolean;
    addresses?: Address[] | MatTableDataSource<Address>;
  }
  export interface Address{
    street: string;
    zipCode: string;
    city: string;
  }


// export interface UserDataSource {
  //   name: string;
  //   email: string;
  //   phone: string;
  //   addresses?: MatTableDataSource<Address>;
  // }

// export interface Address {
//   street: string;
//   zipCode: string;
//   city: string;
// }


  
  

				



// function item(item: any): string {
//   throw new Error('Function not implemented.');
// }

