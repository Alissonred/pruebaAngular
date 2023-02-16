import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthenticationRouting } from './authentication.routing';


@NgModule({
  declarations: [
    LoginComponent, /* AuthenticationComponent */
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRouting,
  ],
  exports: [ LoginComponent ]
})
export class AuthenticationModule { }
