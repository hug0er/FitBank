import { Component, OnInit,Input } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { internetComponent } from '../funciones/internet';
import { ApiService } from '../api.service';
import { Alerta } from '../funciones/alerta'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-apertura-de-cuentas',
  templateUrl: './form-apertura-de-cuentas.component.html',
  styleUrls: ['./form-apertura-de-cuentas.component.css']
})
export class FormAPERTURADECUENTASComponent implements OnInit {
  internet: internetComponent;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  foods: any[];
  @Input() idiomas: any;
  productos: any[];


  constructor(private api: ApiService,  public alerta: Alerta, private router: Router) { 
    this.internet = new internetComponent;
    this.foods =[];
    this.productos =[];
  }

  ngOnInit() {
  }
  idForm2 = new FormControl('', [
    Validators.required,
  ]);
  nombreForm2 = new FormControl('', [
    Validators.required,
  ]);
  grupoForm2 = new FormControl('', [
    Validators.required,
  ]);
  productoForm2 = new FormControl('', [
    Validators.required,
  ]);
  idForm = new FormControl('', [
    Validators.required,
  ]);
  nombreForm = new FormControl('', [
    Validators.required,
  ]);
  grupoForm = new FormControl('', [
    Validators.required,
  ]);
  productoForm = new FormControl('', [
    Validators.required,
  ]);

  campos(){
    console.log('campos')
    this.api.postProvider('/cuentasCliente', localStorage.getItem('id_token'), {'id':this.idForm2.value,'usuario': localStorage.getItem('user')}).then(
      (data : any)=>{
        this.nombreForm2.setValue(data.clientName);
        this.api.postProvider('/productGroup', localStorage.getItem('id_token'), {'id':this.idForm2.value,'usuario': localStorage.getItem('user'), 'csubsystem': '04', 'cgrupoproducto': '', 'descripcion': ''}).then(
          (data1 : any)=>{
            this.foods = this.transformador(data1.array);
            localStorage.setItem('aperturaCuentas', JSON.stringify(data1.array))
            console.log(data1.array[0]);
            for (let i =0; i < data1.array.length; i++){
              this.api.postProvider('/product', localStorage.getItem('id_token'), {'id':this.idForm2.value,'usuario': localStorage.getItem('user'), 'csubsystem': '04', 'cgrupoproducto': data1.array[i].cgrupoproducto}).then(
                (data2 : any)=>{
                  localStorage.setItem(data1.array[i].cgrupoproducto,JSON.stringify(data2.array))
                }, (err)=>{
                })
            }
            
          }, (err)=>{
          })
      }, (err)=>{
      })
  }
  transformador(value){
    let lista = [];

    for (let i=0;i<value.length;i++)
    lista.push({"value": value[i].cgrupoproducto, "viewValue": value[i].descripcion}) 

    return lista;
  }
  transformador2(value){
    let lista = [];

    for (let i=0;i<value.length;i++)
    lista.push({"value": value[i].cproducto, "viewValue": value[i].descripcion}) 

    return lista;
  }
  campos2(){
    this.api.postProvider('/product', localStorage.getItem('id_token'), {'id':this.idForm2.value,'usuario': localStorage.getItem('user'), 'csubsystem': '04', 'cgrupoproducto': this.grupoForm2.value}).then(
      (data : any)=>{
        this.productos = this.transformador2(data.array);
      }, (err)=>{
      })
  }
  enviar(){
    if(navigator.onLine){
      this.api.postProvider('/newAccount', localStorage.getItem('id_token'), this.parametros() ).then((data: any) => {
        this.alerta.presentarAlerta("Cuenta creada con éxito")
      }, (err) =>{
        if (err.error) {
          this.alerta.presentarAlerta(err.error.mensajeUsuario)
          if (err.error.mensaje == "Error de autenticación via token JWT.") { this.logout() }
        }
        else
          this.alerta.presentarAlerta('Error con el Servidor')
      })
    }else{
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
    return ({
      'tipoCuentas' : "1",
      'id': this.idForm.value, 
        "cgrupoproducto": this.grupoForm.value, 
        "product": this.productoForm.value,
        "cnombre": this.nombreForm.value,
        "accountexecutive":localStorage.getItem('user'),
        "accountname": this.nombreForm.value,
        "usuario": localStorage.getItem('user')})
  }

  parametros(){
    return(
      { 
        "cgrupoproducto": this.grupoForm2.value, 
        "product": this.productoForm2.value,
        "id": this.idForm2.value,
        "cnombre": this.nombreForm2.value,
        "accountexecutive":localStorage.getItem('user'),
        "accountname": this.nombreForm2.value,
        "usuario": localStorage.getItem('user')
      })
  }
  close(){
    this.idForm2.reset();
    this.nombreForm2.reset();
    this.grupoForm2.reset();
    this.productoForm2.reset();
  }
  logout() {
    this.router.navigate(['']);
  }
}
