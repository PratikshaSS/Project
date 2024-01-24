import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerlandingComponent } from './ownerlanding/ownerlanding.component';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';

const routes: Routes = [
  { path:'ownerLanding', component:OwnerlandingComponent},
  { path : 'ownerSuccess' , component : OwnerSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
