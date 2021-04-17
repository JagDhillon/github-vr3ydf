import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentPlanComponent } from './current-plan/current-plan.component';
import { PlanDashboardComponent } from './plan-dashboard/plan-dashboard.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { SignupComponent } from './signup/signup.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'plandashboard', component: PlanDashboardComponent},
  {path: 'selectplan', component: SelectPlanComponent},
  {path: 'currentplan', component: CurrentPlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
