import { Component,OnInit, DoCheck, Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ApiService } from '../api.service'
import { GenerarCartasComponent } from '../generar-cartas/generar-cartas.component'
import { Alerta } from '../funciones/alerta'
import { internetComponent } from '../funciones/internet'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form-posicion-consolidada',
  templateUrl: './form-posicion-consolidada.component.html',
  styleUrls: ['./form-posicion-consolidada.component.css']
})
export class FormPOSICIONCONSOLIDADAComponent implements DoCheck {
  nombre: string;
  datos: any;
  @Input() idiomas: any;
  cedula: string;
  internet: internetComponent;
  intento: boolean;
  constructor(public apiService: ApiService,
    public alerta: Alerta,
    private router: Router) {
    this.internet = new internetComponent
    this.intento = false
  }
  idForm = new FormControl('', [Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]*$')]);

  ngDoCheck(){
    if(this.alerta.erase){
      this.datos = null
      this.nombre = null
      this.idForm.reset()
      this.idForm.clearValidators()
      this.alerta.erase=false;
    }
  }

  posicionConsolidada() {
    this.intento = true;
    if (!this.alerta.revisarInternet()) {
      let envio = { "usuario": localStorage.getItem('user'), "id": this.cedula }
      this.apiService.postProvider('/queryAllAccounts', localStorage.getItem('id_token'), envio).then((data: any) => {
        this.nombre = data.clientName
        this.datos = data.array
        this.intento = false;
        localStorage.setItem('c1', this.cedula)
        localStorage.setItem('fecha1', (new Date().toLocaleDateString() + '&' + new Date().toLocaleTimeString()));
        localStorage.setItem('data1', JSON.stringify(data));
        localStorage.setItem('idSocio', this.cedula)
      }, (err) => {
        this.intento = false;
        this.datos = null;
        this.nombre = null;
        if (err.error) {
          this.alerta.presentarAlerta(err.error.mensajeUsuario)
          if (err.error.mensaje == "Error de autenticación via token JWT.") { this.logout() }
        }
        else
          this.alerta.presentarAlerta('Error con el Servidor')
      })
    } else {
      this.alerta.presentarAlerta('No esta conectado');
      this.intento = false;
      this.nombre = JSON.parse((localStorage.getItem('data1'))).clientName
      this.datos = JSON.parse((localStorage.getItem('data1'))).array
      this.alerta.generarDialogo()
      this.cedula = localStorage.getItem('c1')
    }
  }
  close() {
    this.alerta.generarDialogoSeguro();
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}