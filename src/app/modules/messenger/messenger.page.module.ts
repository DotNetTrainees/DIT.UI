import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerPageComponent } from './messenger.page.component';
import { RouterModule, Routes } from '@angular/router';
import { DialoguesComponent } from './components/dialogues/dialogues.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { InputControlModule } from 'src/app/shared/controls/input-control/input-control.module';
import { MessengerComponent } from './components/chat/chat.component';
import { TextareaControlModule } from 'src/app/shared/controls/textarea-control/textarea-control.module';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { DatePickerModule } from 'src/app/shared/controls/date-picker/date.picker.module';

const routes: Routes = [
  { path: '', component: MessengerPageComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    MessengerPageComponent,
    DialoguesComponent,
    MessengerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ScrollingModule,
    InputControlModule,
    TextareaControlModule,
    DatePickerModule,
    NzAvatarModule,
    NzListModule,
    NzSkeletonModule,
    NzDatePickerModule,
  ],
})
export class MessengerModule {}
