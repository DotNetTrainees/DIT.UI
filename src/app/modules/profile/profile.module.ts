import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile.page';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { WallComponent } from './components/wall/wall.component';
import { ManageComponent } from './components/manage/manage.component';
import { FriendsPanelComponent } from './components/friends-panel/friends-panel.component';

const routes: Routes = [
  { path: '', component: ProfilePageComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [ProfilePageComponent, InfoComponent, WallComponent, ManageComponent, FriendsPanelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProfileModule { }
