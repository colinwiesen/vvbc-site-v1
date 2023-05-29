import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-create-bible-on-our-day-page',
  templateUrl: './create-bible-on-our-day-page.component.html',
  styleUrls: ['./create-bible-on-our-day-page.component.scss']
})
export class CreateBibleOnOurDayPageComponent {

  title: string = '';
  description: string = '';
  date: string = '';
  link: string = '';

  api: string = 'http://localhost:3000/addbibleonourday'

  notValid: boolean = false;

  constructor(private http: HttpClient){}

  onSubmit(){
    if (this.link && this.title && this.description && this.date != '') {
      this.notValid = false;
      this.sendDate();
    }else{
      this.notValid = true;
    }

  }

  sendDate(){
    const data: any = {
      'title':this.title,
      'description':this.description,
      'date':this.date,
      'link':this.link
    }
    this.http.post(this.api, data).subscribe(
      () => console.log('It WORKED'),
      (err) => console.log(err)
    )
  }

}
