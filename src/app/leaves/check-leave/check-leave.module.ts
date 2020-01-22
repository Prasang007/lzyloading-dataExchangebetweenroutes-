import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckLeaveRoutingModule } from './check-leave-routing.module';
import { CasualComponent } from './casual/casual.component';
import { EarnedComponent } from './earned/earned.component';
import { BadLinkComponent } from './bad-link/bad-link.component';
import { CheckLeaveComponent } from './check-leave.component';


@NgModule({
  declarations: [CheckLeaveComponent, CasualComponent, EarnedComponent, BadLinkComponent],
  imports: [
    CommonModule,
    CheckLeaveRoutingModule
  ]
})
export class CheckLeaveModule { }
