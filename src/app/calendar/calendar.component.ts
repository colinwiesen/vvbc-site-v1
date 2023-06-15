import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  events = [
    //{title: 'Sermon', date: 'Sunday', time: '10:15 AM', description: ' Sunday Sermon'},
    {title: 'Ladies Bible Study', date: 'Tusday', time: '10:00 AM', description: ' Sunday Sermon'},
    {title: 'Bible Study and Prayer', date: 'Wednesday', time: '10:15 AM', description: ' Sunday Sermon'},
    {title: 'AWANA', date: 'Thrusday', time: '6:30 PM', description: ' Sunday Sermon'},
    {title: 'Marriage Bible Study', date: 'Friday', time: '6:45 PM', description: ' Sunday Sermon'},
    {title: 'Men\'s Breakfast', date: 'Saturday', time: '7 AM', description: ' Sunday Sermon'},
  ];

}
