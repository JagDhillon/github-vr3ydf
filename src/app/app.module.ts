import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartComponent } from './start/start.component';
import { SharedModule } from './shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { BackgroundComponent } from './background/background.component';
import { PlanDashboardComponent } from './plan-dashboard/plan-dashboard.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SignupComponent,
    BackgroundComponent,
    PlanDashboardComponent,
    SelectPlanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
