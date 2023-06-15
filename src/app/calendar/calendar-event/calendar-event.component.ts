import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.scss']
})
export class CalendarEventComponent {


  @Input() title: string = 'Bible in Our Day';
  @Input() date: string = 'Tusday';
  @Input() time: string = '12:00 pm';
  @Input() description: string = 'Join us on our Faceboook page for a message from Pastor as he relates current affairs to scriptural events.';

}
