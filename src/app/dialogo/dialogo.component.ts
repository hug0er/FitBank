import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {

    description:string;
    fecha: string;

    constructor(
        private dialogRef: MatDialogRef<DialogoComponent>,
        @Inject(MAT_DIALOG_DATA) data) {
            console.log(localStorage.getItem('fecha1'));
            this.fecha = localStorage.getItem('fecha1')
    }

    ngOnInit() {
    }

    close() {
        this.dialogRef.close();
    }
}
