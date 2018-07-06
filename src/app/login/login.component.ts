import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ApiService} from '../api.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Servicios } from '../funciones/encryptar'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usuario : string;
  contrasena : string;
  constructor(public apiService : ApiService, public servicios : Servicios,
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
    let User = {"usuario": this.usuario, "contrasena" : this.servicios.toAES(this.contrasena), "desencriptar" : "1" }
    this.apiService.loginProvider(User, '/oauth').then((data : any) =>{
      localStorage.setItem('id_token', data.token);
      localStorage.setItem('user', User.usuario);
      this.router.navigate(['/home'])
      },(err) =>{
        })
  }
}
