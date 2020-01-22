import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeavesRoutingModule } from './leaves-routing.module';
import { LeavesComponent } from './leaves.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';



@NgModule({
  declarations: [LeavesComponent, ApplyLeaveComponent],
  imports: [
    CommonModule,
    FormsModule,
    LeavesRoutingModule
  ]
})
export class LeavesModule { }
