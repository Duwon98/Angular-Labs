import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id = "";
  pwd = "";
  db: string[][] = [["123@gmail.com","123"],["222@gmail.com","123"],["333@gmail.com","123"]];

  constructor() { }

  ngOnInit(): void {
  }
  itemClicked(){
    var login = false;
    for (var index in this.db){
      if (this.id == this.db[index][0]){
        if(this.pwd == this.db[index][1]){
          login = true;
          break;
        }
      }
    }
    if (login){
      alert("Login!");

    }else{
      alert("Faile!")
    }
  }
}
