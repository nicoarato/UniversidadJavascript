class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;

    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipo) {
        this._tipoEntrada = tipo;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }
}

export default DispositivoEntrada;