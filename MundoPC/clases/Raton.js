import DispositivoEntrada from './DispositivoEntrada.js';

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }


    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return `idRaton: ${this.idRaton} - Marca: ${this.marca}`;
    }
}

export default Raton;