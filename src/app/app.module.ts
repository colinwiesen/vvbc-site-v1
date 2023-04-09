import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgbOffcanvasConfig, NgbOffcanvas } from "@ng-bootstrap/ng-bootstrap";
//import { NgModel,ReactiveFormsModule,FormsModule } from '@angular/forms';
//import { BsDropdownModule } from "ngx-bootstrap/dropdown";

import { SermonSquareCardComponent } from './sermon-square-card/sermon-square-card.component';
import { LatestSermonViewComponent } from './latest-sermon-view/latest-sermon-view.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PastorCardComponent } from './pastor-card/pastor-card.component';
import { SermonsPageComponent } from './sermons-page/sermons-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { MatNavBarComponent } from './mat-nav-bar/mat-nav-bar.component';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    //NgbModule,
    //BsDropdownModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
