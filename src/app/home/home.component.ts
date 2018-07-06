import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormPOSICIONCONSOLIDADAComponent} from '../form-posicion-consolidada/form-posicion-consolidada.component';
import {FormSALDOAHORROSComponent} from '../form-saldo-ahorros/form-saldo-ahorros.component';
import {FormSALDOPRESTAMOSComponent} from '../form-saldo-prestamos/form-saldo-prestamos.component';
import {FormCREACIONDEPERSONASComponent} from '../form-creacion-de-personas/form-creacion-de-personas.component'
import {FormAPERTURADECUENTASComponent} from '../form-apertura-de-cuentas/form-apertura-de-cuentas.component';
import {FormDEPOSITOSComponent} from '../form-depositos/form-depositos.component';
import {FormRETIROSComponent} from '../form-retiros/form-retiros.component';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})




export class HomeComponent implements OnInit {

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }

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
}
  