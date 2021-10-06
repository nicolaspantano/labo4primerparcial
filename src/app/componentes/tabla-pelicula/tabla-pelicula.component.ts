import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula, Tipo } from 'src/app/clases/pelicula';
import { PeliculaService } from 'src/app/servicios/pelicula.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {
  @Output() seSeleccionoPelicula: EventEmitter<any> = new EventEmitter<any>();
  public vista: boolean;

  @Input() arrayPeliculas: Pelicula[] = [];


  constructor(private peliculaService: PeliculaService) { }

  ngOnInit(): void {
  }

  SeleccionarPelicula(pelicula: Pelicula) {
    this.seSeleccionoPelicula.emit(pelicula);
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
