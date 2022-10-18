import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterMRoutingModule } from './footer-m-routing.module';
import { FooterMComponent } from './footer-m.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [
    FooterMComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FooterMRoutingModule,
  ]
})
export class FooterMModule { }
