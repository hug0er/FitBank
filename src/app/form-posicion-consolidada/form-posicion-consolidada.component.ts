import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-form-posicion-consolidada',
  templateUrl: './form-posicion-consolidada.component.html',
  styleUrls: ['./form-posicion-consolidada.component.css']
})
export class FormPOSICIONCONSOLIDADAComponent implements OnInit {

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
