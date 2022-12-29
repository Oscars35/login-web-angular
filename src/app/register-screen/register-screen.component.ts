import { Component } from '@angular/core';
import {UsersService} from "../users/users.service";
import {Router} from "@angular/router";

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

  constructor(public userService: UsersService, public router: Router) {
    this.email = '';
    this.password = '';
    this.passwordConfirmation = '';
    this.passwordError = false;
  }

  register() {
    const user = {email: this.email, password: this.password};
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/').then(r => console.log(r));
    });
  }
}
