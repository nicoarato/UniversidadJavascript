class Producto {

    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    get precio() {
        return this._precio;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    set precio(precio) {
        this._precio = precio;
    }

    toString() {
        return `id: ${this._idProducto} - Producto: ${this._nombre} - $ ${this._precio}.`;
    }
}

export default Producto;