import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeavesComponent } from './leaves.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';

const routes: Routes = [
  {
    path: '',
    component: LeavesComponent, data: {
      titile: 'parent'
    }, children: [
  {
    path: 'applyLeave',
    component: ApplyLeaveComponent
  },
  {
    path: 'checkLeave',
    loadChildren: () => import('./check-leave/check-leave.module').then(m => m.CheckLeaveModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
