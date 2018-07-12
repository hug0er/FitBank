import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {
    cedula : string;
    description:string;
    fecha: string;
    hora : string;

    constructor(
        private dialogRef: MatDialogRef<DialogoComponent>,
        @Inject(MAT_DIALOG_DATA) data) {
            console.log(localStorage.getItem('fecha1'));
            this.fecha = localStorage.getItem('fecha1').split('&')[0]
            this.hora = localStorage.getItem('fecha1').split('&')[1]
            this.cedula = localStorage.getItem('c1');
    }

    ngOnInit() {
    }

    close() {
        this.dialogRef.close();
    }
}
