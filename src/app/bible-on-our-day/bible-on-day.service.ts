import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibleOnDayService {

  url: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }// http -> DB, 

  // get list of posts from DB
  getBibleOnOurDayList(): Observable<any>{ 
    return this.http.get<any>(this.url+'getallbibleonourdayposts'); 
  }

  getBibleOnOurDayPost(id: number): Observable<any>{
    var thing;
    this.http.get<any>(this.url+'getallbibleonourdayposts').subscribe(
      (res) => {
        var item = res[id];
        console.log(`ITEM: ${item}`);
        thing = item;
      }
    )
    return thing;
  }
}
