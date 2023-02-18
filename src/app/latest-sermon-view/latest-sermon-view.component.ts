import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-sermon-view',
  templateUrl: './latest-sermon-view.component.html',
  styleUrls: ['./latest-sermon-view.component.scss']
})
export class LatestSermonViewComponent {

  sermonDate:string = '2/05/2023';
  sermonLength:string = '80 Minutes';
  sermonTitle:string = 'Sermon Title Here';
}
