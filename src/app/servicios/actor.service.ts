import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  actores;

  constructor(private firestore: AngularFirestore) {
    this.actores = this.firestore.collection("actores").snapshotChanges();
  }

  getActores() {
    return this.firestore.collection("actores").snapshotChanges();
  }

  getActor(key: string) {
    return this.firestore.collection("actores").doc(key).valueChanges();
  }

  guardarActor(actor: Actor) {
    return this.firestore.collection("actores").add({
      nombre: actor.nombre,
      apellido: actor.apellido,
      email: actor.email,
      direccion: actor.direccion,
      pais: actor.pais,
    });
  }

}
