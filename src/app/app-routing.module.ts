import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessengerPageComponent } from './modules/messenger/messenger.page.component';
import { LoginGuard } from './shared/guards/login/login.guard';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'messenger',
    // component: MessengerPageComponent,
    loadChildren: () =>
      import('./modules/messenger/messenger.page.module').then(
        (m) => m.MessengerModule
      ),
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
