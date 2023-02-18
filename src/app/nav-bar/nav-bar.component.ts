import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgbNavModule, NgbOffcanvas, NgbOffcanvasConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [NgbOffcanvasConfig, NgbOffcanvas, NgbNavModule]
})
export class NavBarComponent {

  // Add variables for drop downs and states
  sermonsDropDownState:boolean = false;
  ministryDropDownState:boolean = false;

  ////// MOBILE
  constructor(config: NgbOffcanvasConfig, 
              private offcanvasService: NgbOffcanvas,
              public route: ActivatedRoute) {
		// customize default values of offcanvas used by this component tree
		config.position = 'end';
		config.backdropClass = 'bg-info';
		config.keyboard = false;
	}

	open(content:any) {
		this.offcanvasService.open(content);
	}
  


}
