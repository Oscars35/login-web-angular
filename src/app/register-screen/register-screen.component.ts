import { Component } from '@angular/core';
import {UsersService} from "../users/users.service";

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent {
  email: string;
  password: string;
  passwordConfirmation: string;
  passwordError: boolean;

  constructor(public userService: UsersService) {
    this.email = '';
    this.password = '';
    this.passwordConfirmation = '';
    this.passwordError = false;
  }

  register() {
    const user = {email: this.email, password: this.password};
    this.userService.register(user).subscribe(data => {
      console.log(data);
    });
  }
}
