import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NoExistsScreenComponent } from './no-exists-screen/no-exists-screen.component';
import {FormsModule} from "@angular/forms";
import { CookieService } from 'ngx-cookie-service';
import { HomeDesignComponent } from './home-design/home-design.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegisterScreenComponent,
    HomeScreenComponent,
    NoExistsScreenComponent,
    HomeDesignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [AppRoutingModule, LoginScreenComponent, RegisterScreenComponent],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
