import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardBoxComponent } from './dashboard-box/dashboard-box.component';
import { HomeModule } from '../home.module';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardBoxComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,

  ]
})
export class DashboardModule { }




