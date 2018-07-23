import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { ApiService } from '../api.service';
import { Alerta } from '../funciones/alerta';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-tareas-pendientes',
  templateUrl: './tareas-pendientes.component.html',
  styleUrls: ['./tareas-pendientes.component.css']
})
export class TareasPendientesComponent implements DoCheck {
  tareas: any;
  idiomas: any;

  constructor(private api: ApiService, public alerta: Alerta, private router: Router) {
    this.idiomas = JSON.parse(localStorage.getItem('idioma'))
  }

  ngDoCheck() {
    if (localStorage.getItem('tareas')) {
      this.tareas = JSON.parse(localStorage.getItem('tareas'))
    }
    else {

    }
  }

  enviar(i) {
    let prueba = this.tareas

    {
      if (navigator.onLine) {
        this.api.postProvider('/sdeposit', localStorage.getItem('id_token'), this.tareas[i]).then((data: any) => {
          prueba.splice(i, 1)
          localStorage.setItem('tareas', JSON.stringify(prueba))
          this.alerta.presentarAlerta("Transacción Exitosa")
        }, (err) => {
          if (err.error) {
            this.alerta.presentarAlerta(err.error.mensajeUsuario)
            if (err.error.mensaje == "Error de autenticación via token JWT.") { this.logout() }
          }
          else
            this.alerta.presentarAlerta('Error con el Servidor')
        })
      }
      else {
        this.alerta.presentarAlerta('No hay conección ha internet')
      }
    }
  }
  cerrar(i) {
    let prueba = this.tareas
    prueba.splice(i, 1)
    localStorage.setItem('tareas', JSON.stringify(prueba))

  }
  logout() {
    this.router.navigate(['']);
  }

  enviarCCuentas(i){
    let prueba = this.tareas
    {
      if (navigator.onLine) {
        this.api.postProvider('/newAccount', localStorage.getItem('id_token'), this.tareas[i]).then((data: any) => {
          prueba.splice(i, 1)
          localStorage.setItem('tareas', JSON.stringify(prueba))
          this.alerta.presentarAlerta("Transacción Exitosa")
        }, (err) => {
          if (err.error) {
            this.alerta.presentarAlerta(err.error.mensajeUsuario)
            if (err.error.mensaje == "Error de autenticación via token JWT.") { this.logout() }
          }
          else
            this.alerta.presentarAlerta('Error con el Servidor')
        })
      }
      else {
        this.alerta.presentarAlerta('No hay conección ha internet')
      }
    }
  }
}
