import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
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

import { PrivateModuleRoutingModule } from './private-module-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CreateSermonPageComponent } from './create-sermon-page/create-sermon-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';



import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DeleteSermonPageComponent } from './delete-sermon-page/delete-sermon-page.component';
import { CreateBibleOnOurDayPageComponent } from './create-bible-on-our-day-page/create-bible-on-our-day-page.component';



@NgModule({
  declarations: [
    AdminLoginComponent,
    CreateSermonPageComponent,
    DashboardPageComponent,
    DeleteSermonPageComponent,
    CreateBibleOnOurDayPageComponent
  ],
  imports: [
    CommonModule,
    PrivateModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    //BrowserModule,
    //BrowserAnimationsModule,
    //AppRoutingModule,
    //RouterModule,
    LayoutModule,
    
    //SharedModule
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

  ],
  //bootstrap: [CommonModule]
  
})
export class PrivateModuleModule { }
