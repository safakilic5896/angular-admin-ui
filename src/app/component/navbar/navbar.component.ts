import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToDashboard(): void {
    console.log('DashBoard');
  }

  goToForms(): void {
    console.log('Forms');
  }

  goToThemes(): void {
    console.log('Themes');
  }

  goToAddOns(): void {
    console.log('Add-ons');
  }

  goToUsers(): void {
    console.log('Users');
  }

  goToAdmin(): void {
    console.log('Admin');
  }
}
