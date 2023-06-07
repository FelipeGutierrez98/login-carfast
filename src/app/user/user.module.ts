import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    LoginComponent,
    CreateComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
    
  ]
})
export class UserModule { }