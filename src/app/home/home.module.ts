import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { SharedModule } from '../shared/shared.module';

import { Routes, RouterModule } from '@angular/router';
import { ProfileSearchComponent } from './profile/profile-search/profile-search.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { MyprofileComponent } from './profile/myprofile/myprofile.component';
import { ProfileService} from './profile/profile.service';

import { SettingsComponent } from './settings/settings/settings.component';
import { SettingsService} from './settings/settings.service';

const routes: Routes = [
  { path: 'profile/search', component: ProfileSearchComponent },
  { path: 'profile/edit', component: ProfileEditComponent },
  { path: 'profile/myprofile', component: MyprofileComponent },
  { path: 'my/settings', component: SettingsComponent },
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes, { useHash: true }), 
    SharedModule.forRoot()
  ],
  declarations: [
    ProfileSearchComponent, 
    ProfileEditComponent, 
    MyprofileComponent,
    SettingsComponent
  ],
  exports: [RouterModule],
  providers:[ProfileService, SettingsService]
})
export class HomeModule { }
