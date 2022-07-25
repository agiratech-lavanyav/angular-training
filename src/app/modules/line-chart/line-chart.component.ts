import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
  export class LineChartComponent implements OnInit {

    constructor() { }
    public barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public lineChartLabels = ['February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartType = 'line';
    public lineChartLegend = true;
    public lineChartData = [
      {data: [ 49, 89, 41, 86, 35, 50], label: 'Working A'},
      {data: [ 38, 65, 39, 66, 17, 40], label: 'Worked B'}
    ];
    ngOnInit() {
    }
  
  }
  




