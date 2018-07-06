import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import {HomeComponent} from './home/home.component'
import {FormPOSICIONCONSOLIDADAComponent} from './form-posicion-consolidada/form-posicion-consolidada.component'
import {FormSALDOAHORROSComponent} from './form-saldo-ahorros/form-saldo-ahorros.component';
import {FormSALDOPRESTAMOSComponent} from './form-saldo-prestamos/form-saldo-prestamos.component';
import {FormCREACIONDEPERSONASComponent} from './form-creacion-de-personas/form-creacion-de-personas.component';
import {FormAPERTURADECUENTASComponent} from './form-apertura-de-cuentas/form-apertura-de-cuentas.component';
import {FormDEPOSITOSComponent} from './form-depositos/form-depositos.component';
import {FormRETIROSComponent} from './form-retiros/form-retiros.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: '',redirectTo: '/login', pathMatch: 'full'},
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 

  
}

export const routingComponents = [LoginComponent,
  HomeComponent,
  FormPOSICIONCONSOLIDADAComponent,
  FormSALDOAHORROSComponent,
  FormSALDOPRESTAMOSComponent,
  FormCREACIONDEPERSONASComponent,
  FormAPERTURADECUENTASComponent,
  FormDEPOSITOSComponent,
  FormRETIROSComponent
]

