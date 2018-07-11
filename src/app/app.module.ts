import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MatInputModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiService} from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Servicios } from './funciones/encryptar';
import { Alerta } from './funciones/alerta';
import 'hammerjs'
import {HammerGestureConfig,HAMMER_GESTURE_CONFIG,} from '@angular/platform-browser';
import { OnlineStatusModule } from 'ngx-online-status';

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
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    OnlineStatusModule
  ],
  providers: [ApiService, Servicios,Alerta, {provide : HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
