import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-dialogo-seguro',
  templateUrl: './dialogo-seguro.component.html',
  styleUrls: ['./dialogo-seguro.component.css']
})
export class DialogoSeguroComponent implements OnInit {
  er:boolean;
  constructor(private dialogRef: MatDialogRef<DialogoSeguroComponent>, @Inject(MAT_DIALOG_DATA) data) { 
    this.er=data.erase;
  }

  ngOnInit() {}
  accept(){
    this.dialogRef.close(this.er);
  }
  close() {
    this.dialogRef.close(this.er=false);
}
  
}
