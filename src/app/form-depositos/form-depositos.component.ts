import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { internetComponent } from '../funciones/internet';
import { ApiService } from '../api.service';
import { Alerta } from '../funciones/alerta'
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-form-depositos',
  templateUrl: './form-depositos.component.html',
  styleUrls: ['./form-depositos.component.css']
})
export class FormDEPOSITOSComponent implements OnInit {
  internet: internetComponent;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  nombreonl: string;
  foods: any[];

  constructor( private api: ApiService,  public alerta: Alerta, private router: Router) { 
    this.internet = new internetComponent;
    this.foods =[];
    console.log(this.foods)
  }

  ngOnInit() {
  }
  cuentaForm = new FormControl('', [
    Validators.required,
  ]);
  cuentaForm2 = new FormControl('', [
    Validators.required,
  ]);
  idForm2 = new FormControl('', [
    Validators.required,
  ]);
  idForm = new FormControl('', [
    Validators.required,
  ]);
  cantidadForm = new FormControl('', [
    Validators.required,
  ]);
  cantidadForm2 = new FormControl('', [
    Validators.required,
  ]);

  campos(){
    this.api.postProvider('/casCliente', localStorage.getItem('id_token'), {'id':this.idForm2.value,'usuario': localStorage.getItem('user')}).then(
      (data : any)=>{
        this.nombreonl = data.clientName;
        this.foods = this.transformador(data.array);
      }, (err)=>{
      }
    
    )
  }
  transformador(value){
    let lista = [];

    for (let i=0;i<value.length;i++)
    lista.push({"value": value[i].cperson, "viewValue": value[i].cperson}) 

    return lista;
  }

  depositar(){
    if(navigator.onLine){
      let envio = {'id': this.idForm2.value, 'cuenta': this.cuentaForm2.value, 'monto': this.cantidadForm2.value, 'usuario': localStorage.getItem('user')}
      this.api.postProvider('/sdeposit', localStorage.getItem('id_token'),envio).then((data: any) => {
        this.alerta.presentarAlerta("Transacción Exitosa")
      }, (err) =>{
        if (err.error) {
          this.alerta.presentarAlerta(err.error.mensajeUsuario)
          if (err.error.mensaje == "Error de autenticación via token JWT.") { this.logout() }
        }
        else
          this.alerta.presentarAlerta('Error con el Servidor')
      })
    }
    else{
      let lista: any = localStorage.getItem('tareas')
      if (!lista){
        lista = '['+ JSON.stringify(this.generarJson())+']';
      }else{
      lista= JSON.parse(lista)
      lista.push(this.generarJson())
      lista = JSON.stringify(lista)
    }
    localStorage.setItem('tareas',lista)
    this.alerta.presentarAlerta('No está conectado a internet. Su solicitud se encuentra en Tareas Pendientes')
  }
  }
  generarJson(){
    return ({'id': this.idForm.value, 'cuenta': this.cuentaForm.value, 'monto': this.cantidadForm.value, 'usuario': localStorage.getItem('user')})
  }
  close(){
    this.nombreonl = null;
    this.cantidadForm.reset();
    this.cantidadForm.clearValidators();
    this.cantidadForm2.reset();
    this.cantidadForm2.clearValidators();
    this.cuentaForm.reset();
    this.cuentaForm.clearValidators();
    this.cuentaForm2.reset();
    this.cuentaForm2.clearValidators();
    this.idForm2.reset();
    this.idForm2.clearValidators();
    this.idForm.reset();
    this.idForm.clearValidators();
  }
  logout() {
    this.router.navigate(['']);
  }
}
