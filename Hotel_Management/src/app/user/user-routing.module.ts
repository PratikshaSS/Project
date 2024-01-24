import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { UserSuccessComponent } from './user-success/user-success.component';

const routes: Routes = [
  { path: 'userLanding', component: UserlandingComponent },
  { path: 'userSuccess', component: UserSuccessComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
