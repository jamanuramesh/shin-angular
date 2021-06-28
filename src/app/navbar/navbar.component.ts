import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor() { }

  ngOnInit() {

    
  }

  @HostListener('window:scroll', ['$event'])

onWindowScroll(e) {
    let element = document.querySelector('.header');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  }

}
