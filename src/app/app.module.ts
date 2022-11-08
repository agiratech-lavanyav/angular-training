import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { NgChartsModule } from 'ng2-charts';
 import { LineChartComponent } from './modules/line-chart/line-chart.component';
import { AuthguardGuard } from './providers/authguard.guard';
import {CdkTableModule} from '@angular/cdk/table';

import { MatAutocompleteModule} from '@angular/material/autocomplete';
//import { ToolbarComponent } from './modules/toolbar/toolbar.component';



@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    //ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    CdkTableModule,
    MatAutocompleteModule,
  ],
  providers: [AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
