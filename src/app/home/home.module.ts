import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSideBarComponent } from './home-side-bar/home-side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../common/material/material.module';



@NgModule({
  declarations: [
    HomeComponent,
    HomeSideBarComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   // FlexLayoutModule,
    MaterialModule

  ]
})
export class HomeModule { }
