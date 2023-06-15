import { Component,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-sermons-page',
  templateUrl: './sermons-page.component.html',
  styleUrls: ['./sermons-page.component.scss']
})
export class SermonsPageComponent {

  sermonList:any[][] = [["Sermon title 1","Eph 6:11", "About the bible"],
                        ["Sermon title 2","Eph 6:11", "About the bible"],
                        ["Sermon title 3","Eph 6:12", "About the bible"],
                        ["Sermon title 4","Eph 6:13", "About the bible"],
                        ["Sermon title 5","Eph 6:14", "About the bible"],
                        ["Sermon title 6","Eph 6:11", "About the bible"],
                        ["Sermon title 7","Eph 6:11", "About the bible"],
                        ["Sermon title 8","Eph 6:13", "About the bible"],
                        ["Sermon title 9","Eph 6:14", "About the bible"],
                        ["Sermon title 10","Eph 6:14", "About the bible"],
                        ["Sermon title 11","Eph 6:14", "About the bible"],
                        ["Sermon title 12","Eph 6:14", "About the bible"],
                        ["Sermon title 13","Eph 6:14", "About the bible"],
                        ["Sermon title 14","Eph 6:14", "About the bible"],
                        ["Sermon title 15","Eph 6:14", "About the bible"],
                        ["Sermon title 16","Eph 6:14", "About the bible"],
                        ["Sermon title 17","Eph 6:14", "About the bible"],
                        ["Sermon title 18","Eph 6:14", "About the bible"],
                        ["Sermon title 19","Eph 6:14", "About the bible"],
                        ["Sermon title 20","Eph 6:14", "About the bible"],
                        ["Sermon title 21","Eph 6:12", "About the bible"],
                        ["Sermon title 22","Eph 6:12", "About the bible"],
                        ["Sermon title 23","Eph 6:12", "About the bible"],
                      ];
  
  displayedItems: any[] = [];
  pageSize = 20;
  pageSizeOptions: number[] = [5, 10, 15,];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() {
    this.displayedItems = this.sermonList.slice(0, this.pageSize);
  }

  onPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.displayedItems = this.sermonList.slice(startIndex, endIndex);
  }

  ngAfterViewInit() {
    
  }
}
