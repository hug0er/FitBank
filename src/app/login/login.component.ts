import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ApiService} from '../api.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Servicios } from '../funciones/encryptar';
import { Alerta } from '../funciones/alerta';
import { OnlineStatusType, OnlineStatusService } from 'ngx-online-status';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  status: OnlineStatusType=1;
  
  OnlineStatusType = OnlineStatusType;
  usuario : string;
  contrasena : string;
  constructor(public apiService : ApiService, public servicios : Servicios,
  private router: Router, private alerta:Alerta,private onlineStatusService: OnlineStatusService) {
    this.onlineStatusService.status.subscribe((status:OnlineStatusType) =>{
      this.status =status;
    })
   }

  ngOnInit() {

  }
  
  usernameFormControl = new FormControl('', [
    Validators.required,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  intento = false;
  login () {
    this.intento=true;
    if (!this.alerta.revisarInternet()){
      let User = {"usuario": this.usuario, "contrasena" : this.servicios.toAES(this.contrasena), "desencriptar" : "1" }
      this.apiService.loginProvider(User, '/oauth').then((data : any) =>{
        localStorage.setItem('id_token', data.token);
        localStorage.setItem('user', User.usuario);
        this.alerta.presentarAlerta('Ingresado correctamente');
        this.router.navigate(['/home']);
        },(err) =>{
          console.log(err)
          this.intento=false;
          this.alerta.presentarAlerta(err.error.mensajeUsuario)
          })
    }else{
      this.alerta.presentarAlerta('No esta conectado');
      this.intento=false;
    }
  }
}
