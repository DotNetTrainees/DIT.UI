import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'signIn', component: LoginComponent, pathMatch: 'full'},
      {path: 'signUp', component: LoginComponent, pathMatch: 'full'},
    ])
  ]
})
export class AuthModule { }
