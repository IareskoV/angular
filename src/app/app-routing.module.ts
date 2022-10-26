import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.component').then((m) => m.MainComponent)
  },
  {
    path:'cabinet',
    loadChildren:()=> import('./cabinet/cabinet.component').then((m) => m.CabinetComponent)
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'sing-up',
    component:SingUpComponent
  },
  // { path: 'fullpage', loadChildren: () => import('./full-page/full-page.module').then(m => m.FullPageModule) },
  // { path: 'blue', loadChildren: () => import('./blue/blue.module').then(m => m.BlueModule) },
  // { path: 'footerM', loadChildren: () => import('./footer-m/footer-m.module').then(m => m.FooterMModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
];

@NgModule({

  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
  })],
  exports: [RouterModule],

})
export class AppRoutingModule { }
