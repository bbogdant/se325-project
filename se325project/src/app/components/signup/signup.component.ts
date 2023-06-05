import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SingupComponent implements OnInit {

  constructor( private _route:Router, private _http:HttpClient) { }
  singup:FormGroup|any;
  signuser:any;
  ngOnInit(): void {
    this.singup = new FormGroup({
      'fname': new FormControl(),
      'lname':new FormControl(),
      'email':new FormControl(),
      'phone':new FormControl(),
      'password': new FormControl()
    })
  }

  signupdata(singup:FormGroup){
    this.signuser = this.singup.value.fname
    this._http.post<any>("http://localhost:3000/signup", this.singup.value)
    .subscribe(res=>{
      alert('data added successfully');
      this.singup.reset();
      this._route.navigate(['/login']);
    }, err=>{
      alert('Something is wrong');
    })

  }

  
}
