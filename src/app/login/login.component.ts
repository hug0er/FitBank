import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ApiService} from '../api.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  User ={};
  constructor(public apiService : ApiService,
  private router: Router) {
   }

  ngOnInit() {
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  
  login () {
    this.apiService.loginProvider(this.User).then((data : any) =>{
      localStorage.setItem('id_token', data);
      this.router.navigate(['/home'])
      },(err) =>{
        this.router.navigate(['/home'])
        })
  }
}
