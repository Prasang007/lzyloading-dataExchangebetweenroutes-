import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasualComponent } from './casual/casual.component';
import { EarnedComponent } from './earned/earned.component';
import { BadLinkComponent } from './bad-link/bad-link.component';
import { CheckLeaveComponent } from './check-leave.component';


const routes: Routes = [
{path: '', component: CheckLeaveComponent, children: [
{path: 'casual', component: CasualComponent},
{path: 'earner', component: EarnedComponent},
{path: 'badLink', component: BadLinkComponent}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckLeaveRoutingModule { }
