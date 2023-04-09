import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel,ReactiveFormsModule,FormsModule } from '@angular/forms';

import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSliderModule } from "@angular/material/slider";
import { MatNativeDateModule, } from "@angular/material/core";
import { MatPaginatorModule, } from "@angular/material/paginator";
import { MatTableModule } from '@angular/material/table';

import { SermonSquareCardComponent } from '../sermon-square-card/sermon-square-card.component';
import { LatestSermonViewComponent } from '../latest-sermon-view/latest-sermon-view.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { AboutPageComponent } from '../about-page/about-page.component';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { PastorCardComponent } from '../pastor-card/pastor-card.component';
import { SermonsPageComponent } from '../sermons-page/sermons-page.component';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { EventsPageComponent } from '../events-page/events-page.component';
import { MatNavBarComponent } from '../mat-nav-bar/mat-nav-bar.component';

import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

/**

//  THIS SHARED MODULE IS FOR IMPORTING IN TO ANY OTHER MODULES
//  TO USE THESE APP COMPONENTS AND MODULES

**/

const components:any = [
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
  
];

 const modules = [
  CommonModule,
  LayoutModule,
  ReactiveFormsModule,
  FormsModule,
  AppRoutingModule,
  RouterModule,
  MatMenuModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatButtonToggleModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatSliderModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatTableModule,

];


@NgModule({
  declarations: [...components
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ]
})
export class SharedModule { }
