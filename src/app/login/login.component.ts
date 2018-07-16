import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Servicios } from '../funciones/encryptar';
import { Alerta } from '../funciones/alerta';
import { Observable, fromEvent, merge, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Idioma } from '../funciones/idioma';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements DoCheck {
  online$: Observable<boolean>;
  internet: boolean;
  usuario: string;
  contrasena: string;
  activado: boolean;
  intento: boolean;

  constructor(public apiService: ApiService,
    public servicios: Servicios,
    private router: Router,
    private alerta: Alerta,
    private idioma: Idioma) {
    this.intento = false
    this.activado = false
    this.online$ = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    )
    this.networkStatus()
    this.idioma.getIdioma();
  }

  usernameFormControl = new FormControl('', [
    Validators.required,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  ;

  public networkStatus() {
    this.online$.subscribe(value => {
      this.internet = value;
    })
  }

  ngDoCheck() {
    if (this.usuario && this.contrasena) {
      this.activado = true;
    }
  }

  login() {
    this.intento = true;
    if (!this.alerta.revisarInternet()) {
      let User = { "usuario": this.usuario, "contrasena": this.servicios.toAES(this.contrasena), "desencriptar": "1" }
      this.apiService.loginProvider(User, '/oauth').then((data: any) => {
        localStorage.setItem('id_token', data.token);
        localStorage.setItem('user', User.usuario);
        this.alerta.presentarAlerta('Ingresado correctamente');
        this.intento = false;
        localStorage.setItem('ingresado', 'ingresado')
        this.router.navigate(['/home']);
      }, (err) => {
        this.intento = false;
        this.alerta.presentarAlerta(err.error.mensajeUsuario)
      })
    } else {
      this.alerta.presentarAlerta('No esta conectado');
      this.intento = false;
    }
  }
}
