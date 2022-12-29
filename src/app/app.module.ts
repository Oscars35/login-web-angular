import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NoExistsScreenComponent } from './no-exists-screen/no-exists-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegisterScreenComponent,
    HomeScreenComponent,
    NoExistsScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [AppRoutingModule, LoginScreenComponent, RegisterScreenComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
