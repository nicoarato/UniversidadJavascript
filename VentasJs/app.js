import Producto from './clases/Producto.js';
import Orden from './clases/Orden.js';

let producto1 = new Producto('Yerba', 200);

let producto2 = new Producto('Harina', 300);

let producto3 = new Producto('Cartas', 800);

let orden1 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);

orden1.mostrarOrden();

let orden2 = new Orden();

orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);

orden2.mostrarOrden();