import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  singup: FormGroup | any;
  signuser: any;

  constructor(private _route: Router, private _http: HttpClient) {
  }

  ngOnInit(): void {
    this.singup = new FormGroup({
      'username': new FormControl(),
      'password': new FormControl()
    })
  }

  signupdata(singup: FormGroup) {
    this.signuser = this.singup.value.username
    this._http.post<any>("http://localhost:3000/signup", this.singup.value)
      .subscribe(res => {
        alert('User added successfully');
        this.singup.reset();
        this._route.navigate(['/login']);
      }, err => {
        alert('Something is wrong');
      })

  }

  sbtn() {
    this._route.navigate(['/login']);
    $('.form-box').css('display', 'block');
    $('.form-box1').css('display', 'none');
  }
}
