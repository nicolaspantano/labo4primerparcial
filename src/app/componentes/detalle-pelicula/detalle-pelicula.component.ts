import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {
  @Input() pelicula: Pelicula;


  constructor() { }

  ngOnInit(): void {
  }

limpiar(){
  if (this.pelicula!=null){
   this.pelicula=null;
  }
}


}
