import { Component, Input, OnInit } from '@angular/core';
import { Pelicula, Tipo } from 'src/app/clases/pelicula';
import { PeliculaService } from 'src/app/servicios/pelicula.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {
  @Input() arrayPeliculas: Pelicula[] = [];
  @Input() peliculasListado: boolean = true;

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit(): void {
    if (this.peliculasListado) {
      this.peliculaService.getPeliculas().subscribe((peliculas: any) => {
        for (let index = 0; index < peliculas.length; index++) {
          const peli = peliculas[index];
          let id: string = peli.payload.doc.id;
          let nombre: string = peli.payload.doc.data().nombre;
          let tipo: Tipo = peli.payload.doc.data().tipo;
          let fechaDeEstreno: string = peli.payload.doc.data().fechaDeEstreno;
          let cantidadDePublico: number = peli.payload.doc.data().cantidadDePublico;
          let fotoDeLaPelicula: string = peli.payload.doc.data().fotoDeLaPelicula;
          let actorId: string = peli.payload.doc.data().actorId;
          let peliNueva = new Pelicula(nombre, tipo, fechaDeEstreno, cantidadDePublico, fotoDeLaPelicula, actorId);
          peliNueva.id = id;
          this.arrayPeliculas.push(peliNueva)
        }
      })
    }

  }

  limpiar() {
    if (this.arrayPeliculas != [])
      this.arrayPeliculas = [];
  }

}
