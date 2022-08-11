import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id = "";
  pwd = "";
  db: string[][] = [["123@gmail.com","123"],["222@gmail.com","123"],["333@gmail.com","123"]];

  constructor(private router: Router) { }

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
      this.router.navigate(['/', 'account']);

    }else{
      alert("Faile!")
    }
  }
}
