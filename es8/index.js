
/*
*	Que implemento es8
*/
//************************************************************************************++
//Object.entries: devuelve ka clave y los valores de una matriz
const data = {
		frontend : 'Oscar',
		backend: 'Isabel',
		design: 'Ana',	
}
//se transforma el objeto en una matriz
const entries = Object.entries(data);
console.log(entries);/*0: (2) ["frontend", "Oscar"]
1: (2) ["backend", "Isabel"]
2: (2) ["design", "Ana"]*/


//Para saber cuantos elementos tiene el objeto...de esta forma se facilita obtener esta cantidad
console.log(entries.length);

//Objetc Values, devuelve los valores de un objeto a un arreglo
//Se vuelve un arreglo de string el objeto
const values = Object.values(data);
console.log(values);//(3) ["Oscar", "Isabel", "Ana"]
console.log(values.length);//TAmbien devuelve la cantidad de registros, dentro dle objeto
//************************************************************************************++
//padSTart
//Agrego una cadena antes de cualquier otra 
//Parametrois: cuantos caracteres que se van a tener max length, y los elementos que se van a concatenar
const string = 'hello';
console.log(string.padStart(7,'Hi '));
//pasEnd: se definen cuantos parametros va a tener y la cadena a agregar...
console.log(string.padEnd(12,' _____'));
//************************************************************************************++
//Colocar , al final: con la posibiloidad de que hayan mas elementos
/***/