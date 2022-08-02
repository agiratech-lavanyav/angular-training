import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  empId:any;
  data:any;


  constructor(private employeeService: ProfileService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(params=>{

      this.empId = params['empid'];
      // console.log(params);
      this.data = this.employeeService.getDetails(this.empId);
      // console.log(this.id);
    });
  }
}
