import { Injectable } from '@angular/core';
import { Observable, fromEvent, merge, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';

export class internetComponent {
  public online$: Observable<boolean>;
  public internet: boolean;
  constructor(
  ) {
    this.online$ = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    )
    this.networkStatus()
   }

   public networkStatus(){
       console.log('entre 2');
    this.online$.subscribe(value => {
      this.internet = value;
    })
   }
  
}
