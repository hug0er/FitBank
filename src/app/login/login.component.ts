import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ApiService} from '../api.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Servicios } from '../funciones/encryptar';
import { Alerta } from '../funciones/alerta';
import { Observable, fromEvent, merge, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Idioma} from '../funciones/idioma';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  online$: Observable<boolean>;
  internet: boolean;
  usuario : string;
  contrasena : string;
  constructor(public apiService : ApiService, public servicios : Servicios,
  private router: Router, private alerta:Alerta,private idioma:Idioma) {
    this.online$ = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    )
    this.networkStatus()
    this.idioma.getIdioma();
   }

   public networkStatus(){
    this.online$.subscribe(value => {
      this.internet = value;
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
        this.intento=false;
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
