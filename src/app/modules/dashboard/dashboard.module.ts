import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselComponent } from '../carousel/carousel.component';
//import { ToolbarComponent } from '../toolbar/toolbar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CarouselComponent
    //ToolbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
