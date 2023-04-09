import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  sermonList:any[][] = [["The Armor Of God","Eph 6:11", "About the bible"],
                        ["The Armor Of God Pt2","Eph 6:11", "About the bible"],
                        ["The Armor Of God Pt3","Eph 6:12", "About the bible"],
                        ["The Armor Of God Pt4","Eph 6:13", "About the bible"],
                        ["The Armor Of God Pt5","Eph 6:14", "About the bible"],
                        ["The Armor Of God","Eph 6:11", "About the bible"],
                        ["The Armor Of God Pt2","Eph 6:11", "About the bible"],
                        ["The Armor Of God Pt3","Eph 6:12", "About the bible"],
                        ["The Armor Of God Pt2","Eph 6:11", "About the bible"],
                        ["The Armor Of God Pt3","Eph 6:12", "About the bible"],
                        ["The Armor Of God Pt4","Eph 6:13", "About the bible"],
                        ["The Armor Of God Pt5","Eph 6:14", "About the bible"],
                        ["The Armor Of God","Eph 6:11", "About the bible"],
                        ["The Armor Of God Pt2","Eph 6:11", "About the bible"],
                        ["The Armor Of God Pt3","Eph 6:12", "About the bible"],
                        ["The Armor Of God Pt2","Eph 6:11", "About the bible"],
                        ["The Armor Of God Pt3","Eph 6:12", "About the bible"],
                        ["The Armor Of God Pt4","Eph 6:13", "About the bible"],
                        ["The Armor Of God Pt5","Eph 6:14", "About the bible"],
                        ["The Armor Of God","Eph 6:11", "About the bible"],
                        ["The Armor Of God Pt2","Eph 6:11", "About the bible"],
                        ["The Armor Of God Pt3","Eph 6:12", "About the bible"],
                        ["The Armor Of God Pt4","Eph 6:13", "About the bible"],
                        ["The Armor Of God Pt5","Eph 6:14", "About the bible"],
                      ]
 
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    // add more items as needed
  ];

  displayedItems: any[] = [];
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() {
    this.displayedItems = this.sermonList.slice(0, this.pageSize);
  }

  onPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.displayedItems = this.sermonList.slice(startIndex, endIndex);
  }

}
