import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {ApiService} from '../api.service'
import {GenerarCartasComponent} from '../generar-cartas/generar-cartas.component'

@Component({
  selector: 'app-form-posicion-consolidada',
  templateUrl: './form-posicion-consolidada.component.html',
  styleUrls: ['./form-posicion-consolidada.component.css']
})
export class FormPOSICIONCONSOLIDADAComponent implements OnInit {
  nombre : string
  datos : any
  cedula : string;
  constructor(public apiService : ApiService) { }

  ngOnInit() {
  }
  idForm = new FormControl('', [
    Validators.required,
  ]);
  nameForm = new FormControl('', [
    Validators.required,
  ]);
  idForm2 = new FormControl('', [
    Validators.required,
  ]);
  nameForm2 = new FormControl('', [
    Validators.required,
  ]);

posicionConsolidada(){
    let envio = {"usuario": localStorage.getItem('user'), "id" : this.cedula}
    this.apiService.postProvider('/queryAllAccounts', localStorage.getItem('id_token'),envio).then((data : any)=>{
      this.nombre = data.clientName
      this.datos = data.array
      console.log(data.array[0].ccuenta);
         }, (err) => {
           console.log(err)
    })
  }
}
