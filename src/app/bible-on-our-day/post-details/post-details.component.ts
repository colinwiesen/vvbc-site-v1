import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { BibleOnDayService } from '../bible-on-day.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit{

  postID: number;
  post: any;

  link: any;


  constructor( private route: ActivatedRoute,
               private bibleService: BibleOnDayService,
               private sanitizer: DomSanitizer ) {};


  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
              

  ngOnInit(): void {
      this.postID = +this.route.snapshot.paramMap.get('id');
      /*
      console.log(`Post ID: ${this.postID}`);
      this.post = Object.values(this.bibleService.getBibleOnOurDayPost(this.postID-1));
      console.log(`this.post: ${this.post.title,this.post.id}`);
      */
     var x = this.bibleService.getBibleOnOurDayList().subscribe(
      (res) => {
        this.post = res[this.postID-1];
        this.link = this.post.link;
      }
     ) 
  }
}
