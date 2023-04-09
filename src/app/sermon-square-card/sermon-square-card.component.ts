import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sermon-square-card',
  templateUrl: './sermon-square-card.component.html',
  styleUrls: ['./sermon-square-card.component.scss']
})
export class SermonSquareCardComponent {
  @Input() sermonTitle:string = 'The Armor Of God';
  @Input() sermonPassage:string = 'Eph 6:11';
  @Input() sermonDescription:string = 'How the Christian is to Walk';

  @Input() image:string = '../../assets/images/vvbc-cover.jpg';

}
