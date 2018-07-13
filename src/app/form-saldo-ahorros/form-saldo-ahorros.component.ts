import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';



export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-saldo-ahorros',
  templateUrl: './form-saldo-ahorros.component.html',
  styleUrls: ['./form-saldo-ahorros.component.css']
})
export class FormSALDOAHORROSComponent implements OnInit {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  idiomas: any;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() {
    this.idiomas= JSON.parse(localStorage.getItem('idioma'))
   }

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
