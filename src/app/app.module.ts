import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FOPComponent } from './fop/fop.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { YouWaitingComponent } from './you-waiting/you-waiting.component';
import { OpenCountComponent } from './open-count/open-count.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
