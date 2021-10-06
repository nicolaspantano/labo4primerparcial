import { Actor } from "./actor";

export class Pelicula {

    id: string;
    nombre: string;
    tipo: Tipo;
    fechaDeEstreno: string;
    cantidadDePublico: number;
    fotoDeLaPelicula: string;
    actorId: string;

    constructor(nombre: string, tipo: Tipo, fechaDeEstreno: string, cantidadDePublico: number, fotoDeLaPelicula: string, actorId: string) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaDeEstreno = fechaDeEstreno;
        this.cantidadDePublico = cantidadDePublico;
        this.fotoDeLaPelicula = fotoDeLaPelicula;
        this.actorId = actorId;
    }
}

export enum Tipo {
    terror = "terror",
    comedia = "comedia",
    amor = "amor",
    otros = "otros"
}


