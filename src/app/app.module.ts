import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DigitalServicesComponent } from './digital-services/digital-services.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DigitalServices } from './digital-services/digital-services.service';
import { CountersComponent } from './counters/counters.component';
import { IndicatorComponent } from './commons/indicator/indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroductionComponent,
    DigitalServicesComponent,
    TeamComponent,
    BlogComponent,
    ClientsComponent,
    ContactUsComponent,
    FooterComponent,
    CountersComponent,
    IndicatorComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [DigitalServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
