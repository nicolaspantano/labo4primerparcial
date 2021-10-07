export class Producto {
    codigo;
    descripcion;
    precio;
    stock;
    pais;
    comestible;

    constructor(codigo, descripcion, precio, stock, pais,comestible) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.pais=pais;
        this.comestible = comestible;
    }

}
