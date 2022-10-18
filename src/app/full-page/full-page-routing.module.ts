import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullPageComponent } from './full-page.component';

const routes: Routes = [{ path: '', component: FullPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullPageRoutingModule { }
