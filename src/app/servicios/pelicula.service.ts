import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  peliculas;

  constructor(private firestore: AngularFirestore) {
    this.peliculas = this.firestore.collection("peliculas").snapshotChanges();
  }

  getPeliculas() {
    return this.firestore.collection("peliculas").snapshotChanges();
  }

  getPelicula(key: string) {
    return this.firestore.collection("peliculas").doc(key).valueChanges();
  }


  guardarPelicula(pelicula: Pelicula) {
    return this.firestore.collection("peliculas").add({
      nombre: pelicula.nombre,
      tipo: pelicula.tipo,
      fechaDeEstreno: pelicula.fechaDeEstreno,
      cantidadDePublico: pelicula.cantidadDePublico,
      fotoDeLaPelicula: pelicula.fotoDeLaPelicula,
      actorId: pelicula.actorId
    });
  }
}
