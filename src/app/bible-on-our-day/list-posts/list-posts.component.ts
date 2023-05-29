import { Component, OnInit } from '@angular/core';

import { BibleOnDayService } from "../bible-on-day.service";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit{



  postList = [];

  constructor(private bibleService: BibleOnDayService) {};

  ngOnInit(): void {
    // populate postList with data from PostService -> from DB
    this.bibleService.getBibleOnOurDayList().subscribe(
      (res) => {
        
        this.postList = Object.values(res);
        console.log(this.postList);
        
      },
      (err) => {
        console.error(err);
      }
    )
  }
  

}
