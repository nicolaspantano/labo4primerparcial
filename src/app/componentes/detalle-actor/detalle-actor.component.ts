import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.scss']
})
export class DetalleActorComponent implements OnInit {
  @Input() actor:Producto;

  constructor() { }

  ngOnInit(): void {
  }

  limpiar(){
    if (this.actor!=null){
     this.actor=null;
    }
  }

}
