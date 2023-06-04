import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup | any;

  constructor(private _http: HttpClient, private _route: Router, private session: SessionService) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'username': new FormControl(),
      'password': new FormControl()
    })
  }
  logindata(login: FormGroup) {
    this._http.get<any>("http://localhost:3000/users")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.username === this.login.value.username && a.password === this.login.value.password
        });
        if (user) {
          alert('You are successfully login!');
          this.session.login(user);
          this.login.reset();
          this._route.navigate(['']);
        } else {
          alert('User Not Found');
          this._route.navigate(['/login']);
        }
      }, err => {
        alert('Something was wrong');
      })

  }


}


