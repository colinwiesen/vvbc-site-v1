import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbOffcanvasConfig, NgbOffcanvas } from "@ng-bootstrap/ng-bootstrap";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PastorCardComponent } from './pastor-card/pastor-card.component';
import { SermonsPageComponent } from './sermons-page/sermons-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NgModel,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { EventsPageComponent } from './events-page/events-page.component';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { FooterComponent } from './footer/footer.component';
// Materials
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule,MatButtonToggle } from "@angular/material/button-toggle";
import { MatNavBarComponent } from './mat-nav-bar/mat-nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SermonSquareCardComponent } from './sermon-square-card/sermon-square-card.component';
import { LatestSermonViewComponent } from './latest-sermon-view/latest-sermon-view.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    PastorCardComponent,
    SermonsPageComponent,
    ContactPageComponent,
    EventsPageComponent,
    FooterComponent,
    MatNavBarComponent,
    SermonSquareCardComponent,
    LatestSermonViewComponent,
    AdminPageComponent,
    AboutPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
