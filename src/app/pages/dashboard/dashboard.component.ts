import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ssp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: any[] = new Array(5);

  constructor() { }

  ngOnInit() {
  }

}
