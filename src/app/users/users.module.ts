import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatDialogModule} from '@angular/material/dialog'
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersTableComponent } from '../users-table/users-table.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class UsersModule { }