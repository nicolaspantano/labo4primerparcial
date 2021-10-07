import { Component, Input, OnInit } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-un-pais-detalle',
  templateUrl: './un-pais-detalle.component.html',
  styleUrls: ['./un-pais-detalle.component.scss']
})
export class UnPaisDetalleComponent implements OnInit {

  @Input() pais : Pais;
  constructor() { }

  ngOnInit(): void {
  }

}
