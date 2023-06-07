import {Injectable} from '@angular/core';
import {User} from "../models";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  user: User;
  private isLoggedIn = false;

  constructor() {
  }

  login(user: User) {
    this.isLoggedIn = true;
    this.user = user;
  }

  logout() {
    this.isLoggedIn = false;
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  getLoggedInUser() {
    return this.user;
  }


}
