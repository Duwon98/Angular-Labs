import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router : Router
  ){}
  title = 'week4tut';
  // logout function from HTML
  logOut(){
    // if there is data in Session storage
    if (sessionStorage.getItem('valid') != null){
      sessionStorage.clear();
      alert("You have been successfully logged out");
      this.router.navigate(['/', 'login']);
    }else{
      alert("You are not even logged in")
    }
  }
}
