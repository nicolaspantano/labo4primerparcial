import { Component, OnInit } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/clases/actor';
import { Pelicula, Tipo } from 'src/app/clases/pelicula';
import { PeliculaService } from 'src/app/servicios/pelicula.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {
  id: string;
  nombre: string;
  tipo: Tipo;
  fechaDeEstreno: string;
  cantidadDePublico: number;
  fotoDeLaPelicula: string;
  actorId: string;
  actorNombre: string;

  basePath = '/images';                       //  <<<<<<<
  downloadableURL = '';                      //  <<<<<<<
  task: AngularFireUploadTask;
  progressValue: Observable<number>;

  constructor(private peliculaService: PeliculaService, private fireStorage: AngularFireStorage, private toastr: ToastrService) { }

  ngOnInit(): void {
    let today = new Date();
    let todayStr = today.toString()
    let dd = today.getDate();
    let ddStr = dd.toString();
    let mm = today.getMonth() + 1; //January is 0!
    let mmStr = mm.toString(); //January is 0!
    let yyyy = today.getFullYear();
    let yyyyStr = yyyy.toString();

    if (dd < 10) {
      ddStr = '0' + ddStr;
    }

    if (mm < 10) {
      mmStr = '0' + mmStr;
    }

    todayStr = yyyyStr + '-' + mmStr + '-' + ddStr;
    document.getElementById("start").setAttribute("max", todayStr);

    let select = (<HTMLSelectElement>document.getElementById("tipo"));
    for (let tipo in Tipo) {
      select.options[select.options.length] = new Option(tipo);
    }

  }

  cambiarActor(actor: Actor) {
    this.actorId = actor.id;
    this.actorNombre = actor.nombre + ' ' + actor.apellido;
  }

  guardarPelicula() {
    this.fotoDeLaPelicula = this.downloadableURL;
    let pelicula = new Pelicula(this.nombre, this.tipo, this.fechaDeEstreno, this.cantidadDePublico, this.fotoDeLaPelicula, this.actorId);
    this.peliculaService.guardarPelicula(pelicula).then(resp => {
      this.showSuccess();
    }).catch((error) => {
      this.showError(error);
    });
  }

  async onFileChanged(event) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${file.name}`;  // path at which image will be stored in the firebase storage
      this.task = this.fireStorage.upload(filePath, file);    // upload task

      this.progressValue = this.task.percentageChanges();       // <<<<< Percentage of uploading is given
      (await this.task).ref.getDownloadURL().then(url => { this.downloadableURL = url; });  // <<< url is found here
    } else {
      alert('No images selected');
      this.downloadableURL = '';
    }
  }

  showSuccess() {
    this.toastr.success('Se guardó correctamente');
  }

  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }

}
