import { Component } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {

  email: string;
  password: string;

  constructor() {
    this.email="";
    this.password="";
  }
  public login() {
    console.log(this.email);
    console.log(this.password);
  }
}
