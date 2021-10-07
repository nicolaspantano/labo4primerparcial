import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  productos;

  constructor(private firestore: AngularFirestore) {
    this.productos = this.firestore.collection("productos").snapshotChanges();
  }

  getActores() {
    return this.firestore.collection("productos").snapshotChanges();
  }

  getActor(key: string) {
    return this.firestore.collection("productos").doc(key).valueChanges();
  }

  guardarActor(producto: Producto) {
    return this.firestore.collection("productos").add({
      codigo: producto.codigo,
      apellido: producto.descripcion,
      precio: producto.precio,
      direccion: producto.stock,
      pais: producto.pais,
      comestible: producto.comestible,

    });
  }

}
