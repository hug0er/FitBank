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
import {Router, ActivatedRoute} from '@angular/router';

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
  eventText = '';
  mobileQuery: MediaQueryList;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  selectedIndex: number=0;
 private _mobileQueryListener: () => void;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 2000px)');
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

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
  move(num){
    this.selectedIndex=num;
  }
  selectedIndexChange(val){
    this.selectedIndex=val;
  }

  izquierda(evt) {
    const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ?  this.izq() : this.rigth()):'';
}

  izq(){
  if (this.selectedIndex == 0){
        this.selectedIndex= 0;
  }else{
      this.selectedIndex+=-1
    }
  }

  rigth(){
    if (this.selectedIndex == 6){
      this.selectedIndex= 6;
    }else{
    this.selectedIndex+=1
    }
  }
}
