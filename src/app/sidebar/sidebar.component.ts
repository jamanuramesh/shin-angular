import { Component, OnInit } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  email: any;
  fname: any;
  lname: any;
  opened = true;
  opened1 = false;

  toggleprofile() {
    console.log("i acm called...");
    this.opened1 = !this.opened1;
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }
  constructor() {}

  ngOnInit() {
    this.email = localStorage.getItem("email");
    this.fname = localStorage.getItem("fullname");
    this.lname = localStorage.getItem("lastname");
  }

  onlogout() {
    localStorage.removeItem("registeredId");
    localStorage.removeItem("email");
  }
}
