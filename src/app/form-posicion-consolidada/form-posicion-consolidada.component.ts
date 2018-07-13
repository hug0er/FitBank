import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {ApiService} from '../api.service'
import {GenerarCartasComponent} from '../generar-cartas/generar-cartas.component'
import {Alerta} from '../funciones/alerta' 
import {internetComponent} from '../funciones/internet'

@Component({
  selector: 'app-form-posicion-consolidada',
  templateUrl: './form-posicion-consolidada.component.html',
  styleUrls: ['./form-posicion-consolidada.component.css']
})
export class FormPOSICIONCONSOLIDADAComponent implements OnInit {
  nombre : string;
  datos : any;
  idiomas: any;
  cedula : string;
  internet : internetComponent;
  constructor(public apiService : ApiService, public alerta: Alerta) { 
    this.internet = new internetComponent
    this.idiomas= JSON.parse(localStorage.getItem('idioma'))
    console.log(this.idiomas)
  }

  ngOnInit() {
  }
  idForm = new FormControl('', [ Validators.required,]);
  intento = false;
posicionConsolidada(){
  this.intento=true;
  if(!this.alerta.revisarInternet()){
    let envio = {"usuario": localStorage.getItem('user'), "id" : this.cedula}
    this.apiService.postProvider('/queryAllAccounts', localStorage.getItem('id_token'),envio).then((data : any)=>{
      this.nombre = data.clientName
      this.datos = data.array
      this.intento=false;
      localStorage.setItem('c1',this.cedula)
      localStorage.setItem('fecha1', (new Date().toLocaleDateString() +'&'+ new Date().toLocaleTimeString()));
      localStorage.setItem('data1',JSON.stringify(data));
      localStorage.setItem('idSocio',this.cedula)
         }, (err) => {
           this.intento=false;
           this.datos = null;
           this.nombre = null;
           if (err.error){
            this.alerta.presentarAlerta(err.error.mensajeUsuario)
           }
           else 
           this.alerta.presentarAlerta('Error con el Servidor')
           console.log(err)
    })
  }else{
    this.alerta.presentarAlerta('No esta conectado');
    this.nombre = JSON.parse((localStorage.getItem('data1'))).clientName
    this.datos = JSON.parse((localStorage.getItem('data1'))).array
    this.alerta.generarDialogo()
    this.cedula = localStorage.getItem('c1')
    this.intento=false;
  }
  }
  close(){
    this.datos = null
    this.nombre = null
    this.idForm.reset()
    this.idForm.clearValidators()
    
  }
}
