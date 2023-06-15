import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sermon-rectangle-card',
  templateUrl: './sermon-rectangle-card.component.html',
  styleUrls: ['./sermon-rectangle-card.component.scss']
})
export class SermonRectangleCardComponent {
  @Input() sermonTitle:string = 'The Armor Of God';
  @Input() sermonPassage:string = 'Eph 6:11';
  @Input() sermonDescription:string = 'How the Christian is to Walk';

  @Input() image:string = '../../assets/images/vvbc-cover.jpg';


}
