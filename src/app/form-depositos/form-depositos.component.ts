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
    this.foods = this.transformador([1221,121,122121]);
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

  campos(){
    console.log(this.idForm2)
    this.api.postProvider('/casCliente', localStorage.getItem('id_token'), {'id':this.idForm2.value,'usuario': localStorage.getItem('user')}).then(
      (data : any)=>{
    /*    this.nombre = data.cname; */
        this.foods = this.transformador(data.ccuentas);
        console.log(data)
      }, (err)=>{
        console.log(err)
      }
    
    )
  }
  transformador(value){
    let lista = [];

    for (let i=0;i<value.length;i++)
    lista.push({"value": value[i], "viewValue": value[i]}) 

    return lista;
  }

  depositar(){
    console.log('depositar')
  }

}
