import { Component } from '@angular/core';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent {
  email: string;
  password: string;
  confirmPassword: string;

  constructor() {
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
  }

  register() {
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword);
  }

}
