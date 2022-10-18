import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterMComponent } from './footer-m.component';

const routes: Routes = [{ path: '', component: FooterMComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterMRoutingModule { }
