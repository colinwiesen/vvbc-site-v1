import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateModuleRoutingModule } from "./bible-on-our-day-routing.module";
import { PageComponent } from './page/page.component';
import { PostComponent } from './post/post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';



@NgModule({
  declarations: [
    PageComponent,
    PostComponent,
    ListPostsComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PrivateModuleRoutingModule,
  ]
})
export class BibleOnOurDayModule { }
