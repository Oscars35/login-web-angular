import { Component } from '@angular/core';
import {UsersService} from "../users/users.service";
import {Router} from "@angular/router";
import {Form, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent {
  email: string;
  username: string;
  password: string;
  passwordConfirmation: string;
  passwordError: boolean;

  constructor(public userService: UsersService, public router: Router, public fb: FormBuilder) {
    this.email = '';
    this.password = '';
    this.passwordConfirmation = '';
    this.username = ''
    this.passwordError = false;
  }

  register(registerForm: any) {
    const user = { email: this.email, name: this.username, password: this.password};
    this.userService.get(user).subscribe(data => {
      console.log(data);
      if(data.response == "No User") this.registerUser(user);
      else this.userAlreadyExistsError();
    });
  }

  private registerUser(user: any) {
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/').then(r => console.log(r));
    });
  }

  private userAlreadyExistsError() {
    let elementsArray = Array.from(document.getElementsByClassName('email-bad') as HTMLCollectionOf<HTMLElement>)
    elementsArray.at(0).style.display = "flex";
  }
}
