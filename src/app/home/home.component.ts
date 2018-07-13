import { ChangeDetectorRef, HostListener, Component, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormPOSICIONCONSOLIDADAComponent } from '../form-posicion-consolidada/form-posicion-consolidada.component';
import { FormSALDOAHORROSComponent } from '../form-saldo-ahorros/form-saldo-ahorros.component';
import { FormSALDOPRESTAMOSComponent } from '../form-saldo-prestamos/form-saldo-prestamos.component';
import { FormCREACIONDEPERSONASComponent } from '../form-creacion-de-personas/form-creacion-de-personas.component'
import { FormAPERTURADECUENTASComponent } from '../form-apertura-de-cuentas/form-apertura-de-cuentas.component';
import { FormDEPOSITOSComponent } from '../form-depositos/form-depositos.component';
import { FormRETIROSComponent } from '../form-retiros/form-retiros.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Servicios } from '../funciones/encryptar';
import { Alerta } from '../funciones/alerta';
import { Observable, fromEvent, merge, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { IdiomaComponent } from '../idioma/idioma.component';


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
  @ViewChild('bot1') bot1: ElementRef;
  eventText = '';
  online$: Observable<boolean>;
  internet: boolean;
  idiomas: any;
  mobileQuery: MediaQueryList;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  selectedIndex: number = 0;
  alertaBool = false;
  private _mobileQueryListener: () => void;
  @HostListener('window:popstate', ['$event'])
    async onPopState($event) {
    this.alerta.cancelar()
    if (!this.alertaBool){this.alerta.presentarAlerta("Presiona una vez mas para salir")}
    this.alertaBool = true;
    await setTimeout(()=>{ 
      history.pushState(null,null,document.URL);
      this.alertaBool = false},4000) ;
}
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public apiService: ApiService, public servicios: Servicios,
    private router: Router, private alerta: Alerta,public idioma : IdiomaComponent ) {
    history.pushState(null,null,document.URL)
    this.mobileQuery = media.matchMedia('(max-width: 2000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.online$ = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    )
    this.networkStatus()
    this.idiomas= idioma.getEspanol()
    console.log(this.idiomas)
  }

  public networkStatus() {
    this.online$.subscribe(value => {
      this.internet = value;
    })
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
  move(num) {
    this.selectedIndex = num;
    console.log(this.bot1);
  }
  selectedIndexChange(val) {
    this.selectedIndex = val;
  }

  izquierda(evt) {
    const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? this.izq() : this.rigth()) : '';
  }

  izq() {
    if (this.selectedIndex == 0) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex += -1
    }
  }

  rigth() {
    if (this.selectedIndex == 6) {
      this.selectedIndex = 6;
    } else {
      this.selectedIndex += 1
    }
  }
  espanol(){
    this.idiomas = this.idioma.getEspanol();
  }
  ingles(){

    this.idiomas = this.idioma.getIngles(); 
  }

  sleep(){

  }
}
