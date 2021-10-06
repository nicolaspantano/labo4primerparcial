import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { Pelicula, Tipo } from 'src/app/clases/pelicula';
import { PaisService } from 'src/app/servicios/pais.service';
import { PeliculaService } from 'src/app/servicios/pelicula.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss']
})
export class ActorPeliculaComponent implements OnInit {
  public actor: Actor;
  public vista: boolean = false;
  public listaPaises: Pais[] = [];
  public arrayPeliculas: Pelicula[] = [];

  constructor(private paisService: PaisService, private peliculaService: PeliculaService) { }

  ngOnInit(): void {
  }

  mostrar(actor: Actor) {
    this.arrayPeliculas = [];
    this.listaPaises = [];
    this.actor = actor;
    let name: string;
    let bandera: string;
    this.paisService.getPaisByName(actor.pais).subscribe((paises: any) => {
      for (let index = 0; index < paises.length; index++) {
        name = paises[index].name.common;
        bandera = paises[index].flags.png;
        this.listaPaises.push(new Pais(name, bandera))
      }
    }
    )
    this.peliculaService.getPeliculas().subscribe((peliculas: any) => {
      for (let index = 0; index < peliculas.length; index++) {
        const peli = peliculas[index];
        let actorId: string = peli.payload.doc.data().actorId;
        if (peli.payload.doc.data().actorId == this.actor.id) {
          let id: string = peli.payload.doc.id;
          let nombre: string = peli.payload.doc.data().nombre;
          let tipo: Tipo = peli.payload.doc.data().tipo;
          let fechaDeEstreno: string = peli.payload.doc.data().fechaDeEstreno;
          let cantidadDePublico: number = peli.payload.doc.data().cantidadDePublico;
          let fotoDeLaPelicula: string = peli.payload.doc.data().fotoDeLaPelicula;
          let peliNueva = new Pelicula(nombre, tipo, fechaDeEstreno, cantidadDePublico, fotoDeLaPelicula, actorId);
          peliNueva.id = id;
          this.arrayPeliculas.push(peliNueva)
        }
      }
    })
  }

  CambiarVista() {
    if (this.vista == true) {
      this.vista = false;
    }
    else {
      this.vista = true;
    }
  }
}
