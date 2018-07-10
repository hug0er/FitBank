import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {ApiService} from '../api.service'
import {GenerarCartasComponent} from '../generar-cartas/generar-cartas.component'
import {Alerta} from '../funciones/alerta' 

@Component({
  selector: 'app-form-posicion-consolidada',
  templateUrl: './form-posicion-consolidada.component.html',
  styleUrls: ['./form-posicion-consolidada.component.css']
})
export class FormPOSICIONCONSOLIDADAComponent implements OnInit {
  nombre : string
  datos : any
  cedula : string;
  constructor(public apiService : ApiService, public alerta: Alerta) { }

  ngOnInit() {
  }
  idForm = new FormControl('', [
    Validators.required,
  ]);

posicionConsolidada(){
  if(!this.alerta.revisarInternet()){
    let envio = {"usuario": localStorage.getItem('user'), "id" : this.cedula}
    this.apiService.postProvider('/queryAllAccounts', localStorage.getItem('id_token'),envio).then((data : any)=>{
      this.nombre = data.clientName
      this.datos = data.array
      console.log(data.array[0].ccuenta);
         }, (err) => {
           this.datos = [];
           this.nombre = ''
           if (err.error){
            this.alerta.presentarAlerta(err.error.mensajeUsuario)
           }
           else 
           this.alerta.presentarAlerta('Error con el Servidor')
           console.log(err)
    })
  }
  }
  close(){
    this.datos = []
    this.nombre = ''
    this.idForm.reset()
    this.idForm.clearValidators()
    
  }
}
