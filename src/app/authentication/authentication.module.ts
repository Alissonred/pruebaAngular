import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
//import { NgxLoadingModule } from 'ngx-loading';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthenticationRouting } from './authentication.routing';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent, AuthenticationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRouting,
    HttpClientModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    //NgxLoadingModule
  ],
  exports: [ LoginComponent ]
})
export class AuthenticationModule { }
