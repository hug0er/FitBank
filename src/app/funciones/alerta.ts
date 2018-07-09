import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable()
export class Alerta{
  
  constructor( private snackBar: MatSnackBar ) {

  }
    
    presentarAlerta(msg:string){
        let config = new MatSnackBarConfig();
        config.duration = 5000;
        this.snackBar.open(msg,null,config);
    }

    revisarInternet(){
        if (!navigator.onLine){
            this.presentarAlerta('No tienes conexión a Internet')
            return true
        }else{
            return false
        }
        
    }

}