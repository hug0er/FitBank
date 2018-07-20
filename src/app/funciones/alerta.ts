import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {MatDialog, MatDialogConfig} from '@angular/material'
import { DialogoComponent } from '../dialogo/dialogo.component';
import { DialogoSeguroComponent } from '../dialogo-seguro/dialogo-seguro.component';


@Injectable()
export class Alerta{
    erase:boolean;
  
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

    generarDialogoSeguro(){
        let dialogConfigSeguro= new MatDialogConfig();
        dialogConfigSeguro.disableClose = true;
        dialogConfigSeguro.autoFocus = true;

        dialogConfigSeguro.data = {
            id: 2,
            erase:true
        };
        /* this.dialog.open(DialogoSeguroComponent, dialogConfigSeguro); */
        const dialogRef=this.dialog.open(DialogoSeguroComponent, dialogConfigSeguro);
        dialogRef.afterClosed().subscribe(data=>{
            this.erase=data;
        })
        
    }

    cancelar(){
        this.snackBar.dismiss()
    }

}