import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullPageRoutingModule } from './full-page-routing.module';
import { FullPageComponent } from './full-page.component';
import { MainSectionComponent } from '../main-section/main-section.component';
import { CabinetComponent } from '../cabinet/cabinet.component';
import { YouWaitingComponent } from '../you-waiting/you-waiting.component';
import { OpenCountComponent } from '../open-count/open-count.component';
import { TarifsComponent } from '../tarifs/tarifs.component';
import { CardComponent } from '../card/card.component';
import { FooterComponent } from '../footer/footer.component';
import { LandingFooterComponent } from '../landing-footer/landing-footer.component';
import { LandingHeaderComponent } from '../landing-header/landing-header.component';
import { MainComponent } from '../main/main.component';


@NgModule({
  declarations: [
    FullPageComponent,
    MainSectionComponent,
    CabinetComponent,
    YouWaitingComponent,
    OpenCountComponent,
    TarifsComponent,
    CardComponent,
    FooterComponent,
    LandingFooterComponent,
    LandingHeaderComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    FullPageRoutingModule
  ]
})
export class FullPageModule { }
