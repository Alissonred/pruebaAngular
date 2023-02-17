import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
//import { NgxLoadingModule } from 'ngx-loading';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardBoxComponent } from './dashboard-box/dashboard-box.component';
import { HomeModule } from '../home.module';

import { MatDialogModule } from '@angular/material/dialog';
import { ShowCounutriesComponent } from './show-counutries/show-counutries.component';
import { MyListFavoritesComponent } from './my-list-favorites/my-list-favorites.component';
import { ModalComponent } from './modal/modal.component';
import { DataNoteComponent } from './data-note/data-note.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardBoxComponent,
    ShowCounutriesComponent,
    MyListFavoritesComponent,
    ModalComponent,
    DataNoteComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    HomeModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatRadioModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
   // NgxLoadingModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule

  ]
})
export class DashboardModule { }




