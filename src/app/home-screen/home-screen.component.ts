import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
    this.addButtonsHref()
  }

  private addButtonsHref() {
    //I don't want to keep the state of the previous page, for that reason i use href instead of routerLink, that saves the state
    //Of all the things of the previous pages.
    let goLoginButton = document.getElementsByClassName('go-login-button')[0];
    let goRegisterButton = document.getElementsByClassName('go-register-button')[0];
    goLoginButton.addEventListener('click', () => {
      window.location.href = '/login';
    });
    goRegisterButton.addEventListener('click', () => {
      window.location.href = '/register';
    });
  }
}
