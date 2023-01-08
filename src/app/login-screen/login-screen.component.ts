import {Component, ViewEncapsulation} from '@angular/core';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {

  email: string;
  password: string;

  constructor(public userService: UsersService, public router: Router) {
    this.email = '';
    this.password = '';
  }
  public login() {
    console.log(this.email);
    console.log(this.password);
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe(data => {
      console.log(data.dataUser.accessToken);
      this.userService.setToken(data.dataUser.accessToken);
      this.router.navigateByUrl('/').then(r => console.log(r));
    });
  }
}
