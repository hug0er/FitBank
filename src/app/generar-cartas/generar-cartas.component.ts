import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generar-cartas',
  templateUrl: './generar-cartas.component.html',
  styleUrls: ['./generar-cartas.component.css']
})
export class GenerarCartasComponent implements OnInit {
  usuario = localStorage.getItem('user')
  @Input() idiomas: any;
  @Input() dato
  constructor() { 
    
  }

  ngOnInit() {
  }

}
