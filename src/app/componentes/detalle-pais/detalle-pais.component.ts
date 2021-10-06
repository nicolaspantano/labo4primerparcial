import { Component, Input, OnInit } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent implements OnInit {
  @Input() listaPaises: Pais[];

  constructor() { }

  ngOnInit(): void {

  }

  limpiar() {
    if (this.listaPaises != []) {
      this.listaPaises = [];
    }
  }



}
