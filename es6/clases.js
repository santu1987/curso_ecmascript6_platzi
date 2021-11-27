/*
*	Clases, modulos y generadores
*/
//**************************************************************************++
//Clases
class calculator{
	//Metodo constructor
	constructor(){
		this.valueA = 0;
		this.valueB = 0;
	}
	//Metodo de sumar
	sum(valueA,valueB){
		this.valueA = valueA;
		this.valueB = valueB;
		return this.valueA+ this.valueB;
	}
}
const calc = new calculator();
console.log(calc.sum(2,2));
//**************************************************************************++
//Modulos:
import { hello } from './module';
hello();
//**************************************************************************++
//Generator: funcion que devuelve una serie de valores segun el algoritmo definido.
//Se crea una funcion especial

function* helloWorld(){
	//y9ield se va guardando en memoria
	if(true){
		yield 'Hello ';
	}
	if(true){
		yield 'World';
	}
};
//Creo una constante que tome el valor de la funcion
const generatorHello = helloWorld();
//se llaman los valores con next, este mostrará la primera condicion
console.log(generatorHello.next().value);
//;Muestra la segunda opcion
console.log(generatorHello.next().value);
//**************************************************************************++
/*
*
*/