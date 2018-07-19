import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tareas-pendientes',
  templateUrl: './tareas-pendientes.component.html',
  styleUrls: ['./tareas-pendientes.component.css']
})
export class TareasPendientesComponent implements OnInit {
  tareas : any;
  
  constructor() {
    this.tareas = JSON.parse(localStorage.getItem('tareas'))
   }

  ngOnInit() {
  }

  enviar (){

  }

}
