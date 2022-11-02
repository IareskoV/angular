import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { IsLoggedGuard } from './Guards/is-logged.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./main/main.component').then((m) => m.MainComponent),
  },
  {
    path: 'cabinet',
    loadChildren: () =>
      import('./cabinet/cabinet.component').then((m) => m.CabinetComponent),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sing-up',
    component: SingUpComponent,
  },
  {
    path: 'users',
    canActivate:[IsLoggedGuard],
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
