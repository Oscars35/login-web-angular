import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {CookieService} from "ngx-cookie-service";


@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: any): Observable<any> {
    return this.http.post("http://localhost:3000/login", user);
  }

  register(user: any): Observable<any> {
    return this.http.post("http://localhost:3000/register", user);
  }

  get(user: any): Observable<any> {
    return this.http.post("http://localhost:3000/user", user);
  }

  setToken(logInToken: string) {
    this.cookies.set("token", logInToken);
  }

  getToken() {
    return this.cookies.get("token");
  }
}
