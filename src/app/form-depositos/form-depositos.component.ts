import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { internetComponent } from '../funciones/internet';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-form-depositos',
  templateUrl: './form-depositos.component.html',
  styleUrls: ['./form-depositos.component.css']
})
export class FormDEPOSITOSComponent implements OnInit {
  internet: internetComponent;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  nombre: string;
  foods: any[];

  constructor( private api: ApiService) { 
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
  nameForm = new FormControl('', [
    Validators.required,
  ]);
  idForm2 = new FormControl('', [
    Validators.required,
  ]);
  nameForm2 = new FormControl('', [
    Validators.required,
  ]);
  cantidadForm = new FormControl('', [
    Validators.required,
  ]);

  campos(){
    this.api.postProvider('/casCliente', localStorage.getItem('id_token'), {'id':this.idForm2.value,'usuario': localStorage.getItem('user')}).then(
      (data : any)=>{
        this.nombre = data.clientName;
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
    console.log(lista);
  }
  }
  generarJson(){
    return ({'id': this.idForm2.value, 'cuenta': this.cuentaForm.value, 'monto': this.cantidadForm.value, 'usuario': localStorage.getItem('user')})
  }
  close(){
    this.nombre = null;
    this.idForm2.reset()
    this.idForm2.clearValidators()
  }

}
