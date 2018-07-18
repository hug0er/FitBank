import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tareas-pendientes',
  templateUrl: './tareas-pendientes.component.html',
  styleUrls: ['./tareas-pendientes.component.css']
})
export class TareasPendientesComponent implements OnInit {
  tareas : any;
  
  constructor() {
    let tar : any = [{'id' : 1 ,'nombre' : 'asj','cuenta' :'asasas','cantidad' : 'assa'},{'id' : 1 ,'nombre' : 'asj','cuenta' :'asasas','cantidad' : 'assa'}]
    console.log('entre');
    localStorage.setItem('tareas',JSON.stringify(tar));
    console.log(tar);
    console.log('entre2');
    this.tareas = JSON.parse(localStorage.getItem('tareas'))
    console.log('entre3');
   }

  ngOnInit() {
  }

  enviar (){

  }

}
