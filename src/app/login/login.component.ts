import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ApiService} from '../api.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Servicios } from '../funciones/encryptar';
import { Alerta } from '../funciones/alerta';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usuario : string;
  contrasena : string;
  constructor(public apiService : ApiService, public servicios : Servicios,
  private router: Router, private alerta:Alerta) {
   }

  ngOnInit() {
  }
  usernameFormControl = new FormControl('', [
    Validators.required,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  
  login () {
    if (!this.alerta.revisarInternet()){
      let User = {"usuario": this.usuario, "contrasena" : this.servicios.toAES(this.contrasena), "desencriptar" : "1" }
      this.apiService.loginProvider(User, '/oauth').then((data : any) =>{
        localStorage.setItem('id_token', data.token);
        localStorage.setItem('user', User.usuario);
        this.alerta.presentarAlerta('Ingresado correctamente');
        this.router.navigate(['/home']);
        },(err) =>{
          console.log(err)
          this.alerta.presentarAlerta(err.error.mensajeUsuario)
          })
    }
  }
}
