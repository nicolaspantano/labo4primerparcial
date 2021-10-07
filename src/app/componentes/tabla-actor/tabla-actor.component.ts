import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ActorService } from 'src/app/servicios/actor.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {
  @Output() seSeleccionoActor: EventEmitter<any> = new EventEmitter<any>();

  public listaActores: Producto[] = [];


  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    let codigo;
    let descripcion;
    let stock;
    let precio;
    let pais;
    let comestible;
    this.actorService.getActores().subscribe((actores: any) => {
      console.log('actores',actores);
      this.listaActores=actores;
    });
    console.log(this.listaActores);
    
  }

  SeleccionarActor(actor: Producto) {
    console.log(actor);
    this.seSeleccionoActor.emit(actor);
  }

}
