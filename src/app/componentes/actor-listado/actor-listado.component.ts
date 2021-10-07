import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { Producto } from 'src/app/clases/producto';
import { ActorService } from 'src/app/servicios/actor.service';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {
  @Output() seSeleccionoActorDeListado: EventEmitter<any> = new EventEmitter<any>();
  @Input() vista: boolean = false;

  public listaActores: Producto[] = [];

prod;
pais;
bandera;
  constructor(private actorService: ActorService, private paisSvc:PaisService) { }

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

  obtenerProducto(e){
   this.prod=e;
   this.paisSvc.getPaisByName(this.prod.pais).subscribe((res)=>{
     console.log(res[0].name);
     this.pais= new Pais(res[0].translations.spa.official ,res[0].flags.png) 
   })
  }

}
