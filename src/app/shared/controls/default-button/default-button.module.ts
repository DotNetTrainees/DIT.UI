import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultButton } from './default-button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [DefaultButton],
  imports: [
    CommonModule,
    NzButtonModule
  ],
  exports: [DefaultButton]
})
export class DefaultButtonModule { }
