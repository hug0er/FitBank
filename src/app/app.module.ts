//Api y applicacion (en environment esta el link del server)
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {ApiService} from './api.service';
import { HighlightDirective } from './highlight.directive';
//angular
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
//modules definidos en otros archivos
import {MaterialModule} from './material.module';
import { AppRoutingModule, routingComponents } from './app-routing.module';
//funciones
import { Servicios } from './funciones/encryptar';
import { Alerta } from './funciones/alerta';
import {internetComponent} from './funciones/internet'
import { Idioma} from './funciones/idioma';
//hammer (movimiento tactil)
import 'hammerjs'
import {HammerGestureConfig,HAMMER_GESTURE_CONFIG,} from '@angular/platform-browser';
//dialogo
import {DialogoComponent} from './dialogo/dialogo.component';
import { DialogoSeguroComponent } from './dialogo-seguro/dialogo-seguro.component';


declare var Hammer : any;
export class MyHammerConfig extends HammerGestureConfig  {
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: "pan-y",
    });
    return mc;
  }
}



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DialogoComponent,
    HighlightDirective,
    DialogoSeguroComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [ApiService, Servicios,Alerta, {provide : HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig}, internetComponent,Idioma],
  bootstrap: [AppComponent],
  entryComponents : [DialogoComponent,DialogoSeguroComponent]
}) 
export class AppModule { }
