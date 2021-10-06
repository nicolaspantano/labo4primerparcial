import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {
  @Output() seSeleccionoPais: EventEmitter<any> = new EventEmitter<any>();


  public listaPaises: Pais[] =
    [
      // { nombre: "Argentina", bandera: "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-7-1536x963.jpg" },
      // { nombre: "Brasil", bandera: "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png" },
      // { nombre: "Chile", bandera: "https://www.countryflags.com/wp-content/uploads/chile-flag-png-large.png" },
      // { nombre: "Uruguay", bandera: "https://www.countryflags.com/wp-content/uploads/uruguay-flag-png-large.png" },
      // { nombre: "Paraguay", bandera: "https://www.countryflags.com/wp-content/uploads/paraguay-flag-png-large.png" },
      // { nombre: "Bolivia", bandera: "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-1536x1050.jpg" },
    ]

  public bandera: string;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    let name: string;
    let bandera: string;
    this.paisService.getPaises().subscribe((paises: any) => {
      for (let index = 0; index < paises.length; index++) {
        name = paises[index].name.common;
        bandera = paises[index].flags.png;
        this.listaPaises.push(new Pais(name, bandera))
      }
      this.listaPaises = this.shuffle(this.listaPaises).slice(0, 5);
    }
    )
  }

  SeleccionarPais(pais: Pais) {
    this.bandera = pais.bandera;
    this.seSeleccionoPais.emit(pais.nombre);
  }

  shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

}


