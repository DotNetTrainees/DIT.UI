import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InputControlModule } from 'src/app/shared/controls/input-control/input-control.module';

const routes: Routes = [
  { path: 'signIn', component: LoginComponent, pathMatch: 'full' },
  { path: 'signUp', component: RegisterComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputControlModule,
    RouterModule.forChild(routes)],
})
export class AuthModule {}
