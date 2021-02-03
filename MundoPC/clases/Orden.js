class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {

        let orden = `||Orden Nro: ${this.idOrden} ||\n `;
        if (this._computadoras.length === 0) {
            console.log('Orden Vacia.')
        } else {

            for (let compu of this._computadoras) {

                orden += compu.toString() + '\n';
            }

        }

        return orden;
    }



}

export default Orden;