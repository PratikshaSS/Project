import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerlandingComponent } from './ownerlanding/ownerlanding.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    OwnerlandingComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MatButtonModule
  ]
})
export class OwnerModule { }
