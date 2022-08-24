import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = "";
  birthdate = "";
  age = "";
  email = "";
  pwd = "";
  // db: string[][] = [["123@gmail.com","123"],["222@gmail.com","123"],["333@gmail.com","123"]];

  // constructor(private router: Router) { }
  constructor(
    private http: HttpClient,
    private router: Router
    ){ }
  ngOnInit(): void {
  }
  login(loginForm:NgForm){
    this.http.post('/api/auth', loginForm.value).subscribe((res:any)=> {
      if(res == true){
        // If user successfully login, their login details will be saved in sessionStorage.
        if (typeof(Storage) !== "undefined"){
          sessionStorage.setItem("name", loginForm.value.name);
          sessionStorage.setItem("birthdate", loginForm.value.birthdate);
          sessionStorage.setItem("age", loginForm.value.age);
          sessionStorage.setItem("email", loginForm.value.email);
          sessionStorage.setItem("valid", 'true');
          // Testing sessionStorage
          console.log("Welcome "+sessionStorage.getItem("name"));
        }
       this.router.navigate(['/', 'account']);
      }else{
        alert('login faile')
      }

    },
    err =>{
      console.log(err);
      alert("Error");
    });
    // var login = false;
    // for (var index in this.db){
    //   if (this.email == this.db[index][0]){
    //     if(this.pwd == this.db[index][1]){
    //       login = true;
    //       break;
    //     }
    //   }
    // }
    // if (login){
    //   this.router.navigate(['/', 'account']);

    // }else{
    //   alert("Faile!")
    // }

  }
}
