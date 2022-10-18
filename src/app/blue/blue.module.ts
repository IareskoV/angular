import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlueRoutingModule } from './blue-routing.module';
import { BlueComponent } from './blue.component';
import { CardComponent } from '../card/card.component';
import { TarifsComponent } from '../tarifs/tarifs.component';


@NgModule({
  declarations: [
    BlueComponent,
    TarifsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BlueRoutingModule
  ]
})
export class BlueModule { }
