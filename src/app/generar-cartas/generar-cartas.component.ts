import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generar-cartas',
  templateUrl: './generar-cartas.component.html',
  styleUrls: ['./generar-cartas.component.css']
})
export class GenerarCartasComponent implements OnInit {
  usuario = localStorage.getItem('user')
  idiomas: any;
  @Input() dato
  constructor() { 
    this.idiomas = JSON.parse(localStorage.getItem('idioma'))
  }

  ngOnInit() {
  }

}
