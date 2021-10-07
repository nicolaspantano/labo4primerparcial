import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ActorService } from 'src/app/servicios/actor.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {
  @Output() seSeleccionoActorDeListado: EventEmitter<any> = new EventEmitter<any>();
  @Input() vista: boolean = false;

  public listaActores: Producto[] = [];


  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    let nombre: string;
    let apellido: string;
    let email: string;
    let direccion: string;
    let pais: string;
    let id: string;
    let comestible;
    this.actorService.getActores().subscribe((actores: any) => {
      for (let index = 0; index < actores.length; index++) {
        const actor = actores[index];
        nombre = actor.payload.doc.data().nombre;
        apellido = actor.payload.doc.data().apellido;
        email = actor.payload.doc.data().email;
        direccion = actor.payload.doc.data().direccion;
        pais = actor.payload.doc.data().pais;
        id = actor.payload.doc.id;
        let actorAux = new Producto(nombre, apellido, email, direccion, pais,comestible);
        //actorAux.id = id;
        this.listaActores.push(actorAux);
      }
    });
  }

  SeleccionarActor(actor: Producto) {
    this.seSeleccionoActorDeListado.emit(actor);
  }

}
