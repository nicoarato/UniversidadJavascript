class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora() {
        return this._idComputadora;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get monitor() {
        return this._monitor.toString();
    }

    set monitor(monitor) {
        this._monitor = monitor;
    }

    get raton() {
        return this._raton.toString();
    }

    set raton(raton) {
        this._raton = raton;
    }


    get teclado() {
        return this._teclado.toString();
    }

    set teclado(teclado) {
        this._teclado = teclado;
    }


    toString() {
        return `idPC: ${this.idComputadora}
                PC: ${this.nombre}: \n 
                ${this.monitor} \n ________________________________________________ \n
                ${this.raton} \n ________________________________________________ \n
                ${this.teclado} \n ________________________________________________ \n
                `
    }


}

export default Computadora;