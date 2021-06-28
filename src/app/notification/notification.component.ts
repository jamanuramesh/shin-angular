import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  opened = true ;
  opened1=false;

  toggleSidebar() {
    this.opened = !this.opened;
  }
  toggleprofile()
  {
    this.opened1=!this.opened1;
  }

  ngOnInit() {
  }

}
