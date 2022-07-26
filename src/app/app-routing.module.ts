import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { LineChartComponent } from './modules/line-chart/line-chart.component';
import { AuthguardGuard } from './providers/authguard.guard';


const routes: Routes = [
  // { path: '', component: LoginComponent},
  { path: 'line-chart', component: LineChartComponent },
  { path: '', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),canActivate: [AuthguardGuard]},
  { path: 'employee-table', loadChildren: () => import('./modules/employee-table/employee-table.module').then(m => m.EmployeeTableModule) },
  { path: 'details', loadChildren: () => import('./modules/details/details.module').then(m => m.DetailsModule) },
  { path: 'details/:empid', loadChildren: () => import('./modules/details/details.module').then(m => m.DetailsModule) },
  { path: 'edit-profile', loadChildren: () => import('./modules/edit-profile/edit-profile.module').then(m => m.EditProfileModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
