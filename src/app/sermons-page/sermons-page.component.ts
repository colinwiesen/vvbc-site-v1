import { Component } from '@angular/core';

@Component({
  selector: 'app-sermons-page',
  templateUrl: './sermons-page.component.html',
  styleUrls: ['./sermons-page.component.scss']
})
export class SermonsPageComponent {

  sermonList:any[][] = [["The Armor Of God","Eph 6:11", "About the bible"],
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

}
