import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { TextAreaControl } from './textarea-control.component';



@NgModule({
  declarations: [
    TextAreaControl
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
  ],
  exports: [
    TextAreaControl
  ]
})
export class TextareaControlModule { }
