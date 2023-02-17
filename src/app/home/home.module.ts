import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { CdkStepper } from '@angular/cdk/stepper';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeSideBarComponent } from './home-side-bar/home-side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../common/material/material.module';

import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

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
    MaterialModule,
    MatDialogModule,
    MatFormFieldModule

  ]
})
export class HomeModule { }
