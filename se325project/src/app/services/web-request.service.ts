import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  login(username: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/user/login`, {
      username,
      password
    }, {
      observe: 'response'
    })
  }

  signup(username: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/user/register`, {
      username,
      password
    }, {
      observe: 'response'
    })
  }

}
