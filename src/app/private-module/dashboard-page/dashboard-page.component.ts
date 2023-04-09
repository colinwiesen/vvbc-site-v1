import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit{

  constructor(private http:HttpClient){}


  ngOnInit(){
  }
}
