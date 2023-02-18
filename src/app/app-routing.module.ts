import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AboutPageComponent } from './about-page/about-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SermonsPageComponent } from './sermons-page/sermons-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'sermons', component: SermonsPageComponent},
  {path: 'events', component: EventsPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'admin', component: AdminPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
