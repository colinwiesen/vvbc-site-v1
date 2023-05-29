import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
  @Input() id: number;

  desc:string;

  ngOnInit(): void {
    const descCut: string = this.description.slice(0,216);
    this.desc = descCut.substr(0, Math.min(descCut.length, descCut.lastIndexOf(" ")));
    console.log(`ID: ${this.id}`);
  }


  gotoDetails() {
    // import router, create route :id`s  
    window.location.href = this.link;
  }


}
