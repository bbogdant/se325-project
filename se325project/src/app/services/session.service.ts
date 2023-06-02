import { Injectable } from '@angular/core';
import {User} from "../models";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private isLoggedIn = false;
  user: User | undefined;

  constructor() { }

  login(user: User) {
    this.isLoggedIn = true;
    this.user = user;
  }

  logout() {
    this.isLoggedIn = false;
    this.user = undefined;
  }

}
