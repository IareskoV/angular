import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInstanceButtonsComponent } from '../user-instance-buttons/user-instance-buttons.component';
import { UserInstanceComponent } from '../user-instance/user-instance.component';
import { UserUpdateComponent } from '../user-update/user-update.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  {
    path: ':id',
    component: UserInstanceComponent,
    children: [{ path: 'update', component: UserUpdateComponent },{ path: '', component: UserInstanceButtonsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
