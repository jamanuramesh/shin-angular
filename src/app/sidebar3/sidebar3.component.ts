import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar3',
  templateUrl: './sidebar3.component.html',
  styleUrls: ['./sidebar3.component.css']
})
export class Sidebar3Component implements OnInit {

  email:any;
  fname:any;
  lname:any;
  opened = true ;
  opened1 = false ;

  toggleprofile()
  {
    this.opened1 = !this.opened1;
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }
  constructor() { }

  ngOnInit() {
    this.email=localStorage.getItem('email');
    this.fname=localStorage.getItem('fullname');
    this.lname=localStorage.getItem('lastname');
  }

  onlogout()
  {
    localStorage.removeItem('registeredId');
    localStorage.removeItem('email');
  }

}
