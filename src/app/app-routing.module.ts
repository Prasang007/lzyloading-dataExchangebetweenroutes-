import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AttendenceComponent } from './attendence/attendence.component';

const routes: Routes = [{
  path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  
},
{
  path: 'profile',
  component: ProfileComponent
},
{
  path: 'attendence',
  component: AttendenceComponent
},
{
  path: 'leaves',
  loadChildren: () => import('./leaves/leaves.module').then(m => m.LeavesModule)
},
{
  path: '',
  redirectTo: '/attendence',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
