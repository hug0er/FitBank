import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
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

export class HomeComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
 private _mobileQueryListener: () => void;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1200px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
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
