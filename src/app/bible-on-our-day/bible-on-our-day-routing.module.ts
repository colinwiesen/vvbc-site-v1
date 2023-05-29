import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { PostDetailsComponent } from './post-details/post-details.component';


const routes: Routes = [
  {path: '', component: PageComponent},
  {path: 'posts/:id', component: PostDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateModuleRoutingModule { }