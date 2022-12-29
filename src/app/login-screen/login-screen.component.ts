import { Component } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {

  email: string;
  password: string;

  constructor(public userService: UsersService) {
    this.email = '';
    this.password = '';
  }
  public login() {
    console.log(this.email);
    console.log(this.password);
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe(data => {
      console.log(data);
    });
  }
}
