import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterScreenComponent} from "./register-screen/register-screen.component";
import {LoginScreenComponent} from "./login-screen/login-screen.component";
import {HomeScreenComponent} from "./home-screen/home-screen.component";
import {NoExistsScreenComponent} from "./no-exists-screen/no-exists-screen.component";

const routes: Routes = [
  { path:'' , redirectTo: '/home', pathMatch: 'full' },
  { path: 'register', component: RegisterScreenComponent },
  { path: 'login', component: LoginScreenComponent },
  { path: 'home', component: HomeScreenComponent },
  { path: '**', component: NoExistsScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
