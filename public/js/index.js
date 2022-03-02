import Jugador from "./class/Jugador.js";
import Pieza from "./class/Pieza.js";
import validarDatos from './function/ValidarDatos.js';

//console.log(new Jugador(),new Jugador("Harley",0,1,"Azul"));
//console.log(new Pieza(),new Pieza("Hola mundo :v ","Azul",1));

const luis=new Jugador("Luis",0,1,"Azul");
const carlos=new Jugador("Carlos");
console.log(carlos)
const ficha=new Pieza();
//console.log(luis);



console.log(validarDato(5,luis,false,"Jugador"));
//luis.Nombre="Carlos";
//luis.sumarPuntos();
//console.log(luis,luis.Nombre);
//console.log(validarDatos(3,{}))