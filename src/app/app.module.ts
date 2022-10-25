import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FOPComponent } from './fop/fop.component';
import { HeaderComponent } from './header/header.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatTableModule } from '@angular/material/table'

import { environment } from '../environments/environment';
import { UsersTableComponent } from './users-table/users-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
