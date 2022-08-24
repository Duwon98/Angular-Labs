import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  htmlContent = '';
  constructor() { }

  ngOnInit(): void {
    // If user has logged in, displaying user detials in account page
    if (sessionStorage.getItem('valid') != null){
      this.htmlContent += '<h3>Name: ' + sessionStorage.getItem('name') + "</h3>" 
      this.htmlContent += '<h3>Birthdate: ' + sessionStorage.getItem('birthdate') + "</h3>" 
      this.htmlContent += '<h3>Age: ' + sessionStorage.getItem('age') + "</h3>" 
      this.htmlContent += '<h3>Email: ' + sessionStorage.getItem('email') + "</h3>" 
    }
    }
    
  }

