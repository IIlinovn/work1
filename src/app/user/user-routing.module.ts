import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserViewComponent } from './user-view/user-view.component';
import {UserEditComponent} from "./user-edit/user-edit.component";

const routes: Routes = [
  { path: '', component: UserAuthComponent },
  { path: 'me', component: UserViewComponent },
  { path: 'edit', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
