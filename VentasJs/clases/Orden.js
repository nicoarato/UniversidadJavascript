class Orden {

    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }



    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }



    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {

            // this._productos = [...this.productos, producto];
            this._productos.push(producto);
            this._contadorProductosAgregados++;

        } else {
            console.log('No se pueden agregar mas productos.');
        }
    }

    calcularTotal() {
        let totalVenta = 0;

        for (let producto of this._productos) {
            totalVenta += producto.precio;
        }

        return totalVenta;
    }

    mostrarOrden() {
        let productosOrden = '';

        for (let producto of this._productos) {
            productosOrden += producto.toString() + '\n ';
        }

        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()} \n Productos: \n ${productosOrden}`)
    }
}

export default Orden;