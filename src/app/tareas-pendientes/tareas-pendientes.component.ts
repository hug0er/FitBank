import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-tareas-pendientes',
  templateUrl: './tareas-pendientes.component.html',
  styleUrls: ['./tareas-pendientes.component.css']
})
export class TareasPendientesComponent implements DoCheck {
  tareas : any;
  
  constructor() {
    
   }

  ngDoCheck() {
    if (localStorage.getItem('tareas')){
      this.tareas = JSON.parse(localStorage.getItem('tareas'))
    }
    else {

    }
  }

  enviar(i){
    let prueba = this.tareas
    prueba.splice(i,1)
    localStorage.setItem('tareas',JSON.stringify(prueba))

  }

}
