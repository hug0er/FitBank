import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {MatDialog, MatDialogConfig} from '@angular/material'
import { DialogoComponent } from '../dialogo/dialogo.component';

@Injectable()
export class Alerta{
  
  constructor( private snackBar: MatSnackBar, private dialog : MatDialog ) {

  }
    
    presentarAlerta(msg:string){
        let config = new MatSnackBarConfig();
        config.duration = 4000;
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
    
    generarDialogo(){
        let dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {
            id: 1,
            title: 'Angular For Beginners'
        };
        
        this.dialog.open(DialogoComponent, dialogConfig)
    }

    cancelar(){
        this.snackBar.dismiss()
    }

}