import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name = "";
  birthdate = "";
  age = "";
  email = "";
  pwd = "";
  count = 0;
  msg = "";
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('valid') == null){
          alert('Please login first')
          this.router.navigate(['/', 'login']);
    }
  }
  edit(editForm:NgForm){
    // If user attempt to change their name
    if (editForm.value.name != ''){
        var previousName = sessionStorage.getItem('name');
        sessionStorage.setItem('name',editForm.value.name )
        this.msg += "Your name has been changed from " + previousName + " to " + sessionStorage.getItem('name');
        this.count ++;
    };
    // If user attempt to change their birthdate
    if (editForm.value.birthdate != ''){
        var previousBirthdate = sessionStorage.getItem('birthdate');
        sessionStorage.setItem('birthdate',editForm.value.birthdate)
        this.msg += "\nYour birthdate has been changed from " + previousBirthdate + " to " + sessionStorage.getItem('birthdate')
        this.count ++;
    };
    // If user attempt to change their age
    if (editForm.value.age != ''){
        var previousAge = sessionStorage.getItem('age');
        sessionStorage.setItem('age', editForm.value.age)
        this.msg += "\nYour age has been changed from " + previousAge + " to " + sessionStorage.getItem('age')
        this.count ++;
    };
    // If user attempt to change their email
    if (editForm.value.email != ''){
        var previousEmail = sessionStorage.getItem('email');
        sessionStorage.setItem('email',editForm.value.email)
        this.msg += "\nYour email has been changed from " + previousEmail + " to " + sessionStorage.getItem('email')
        this.count ++;
    };
    // If user details has been changed
    if (this.count > 0){
      alert(this.msg);
      this.router.navigate(['/', 'account']);
      // if user did not put anything
    }else{
      alert("Please input something.");
    }


  }
}