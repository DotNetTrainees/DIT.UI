import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthState } from '../authentication/state/auth.state';
import {
  NgxsLoggerPluginModule,
  NgxsModule,
  NgxsReduxDevtoolsPluginModule,
} from 'ngxs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([AuthState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
})
export class StoreModule {}
