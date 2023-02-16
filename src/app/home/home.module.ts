import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSideBarComponent } from './home-side-bar/home-side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    HomeSideBarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
