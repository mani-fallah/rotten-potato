import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  errorMsg: string = "";

  constructor(private auth: AuthService,private router: Router) {
  }
  login(){
    if(this.username.trim().length === 0){
      this.errorMsg = "Please enter username";
    }
    else if(this.password.trim().length === 0){
      this.errorMsg = "Please enter password";
    }
    else{
      console.log(this.username);
      this.errorMsg = "";
      let log = this.auth.login(this.username, this.password);
      if(log===200)
      {
        this.router.navigate(['/home']);
      }
      else if(log===403)
      {
        this.errorMsg = "wrong input";
      }
    }
  }
}
