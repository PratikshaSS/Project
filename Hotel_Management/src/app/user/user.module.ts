import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { SharedModule } from '../shared/shared.module';
import { UserSuccessComponent } from './user-success/user-success.component';


@NgModule({
  declarations: [
    UserlandingComponent,
    UserSuccessComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
