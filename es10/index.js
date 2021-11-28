/*
*	Novedades de ecmascript10
*/
//**********************************************************************************++
let array = [1,2,3,[1,2,3,[1,2,3]]];
//Aplana el arreglo se10
console.log(array.flat(2));//(7) [1, 2, 3, 1, 2, 3, Array(3)]

//FLat map: ,mapear el elemento , pasarle una funcion y aplanarla en base al resultado
let array2 = [1,2,3,4,5,6];
let flatMap = array2.flatMap(value=>[value, value*2]);
console.log(flatMap);//[1, 2, 2, 4, 3, 6, 4, 8, 5, 10, 6, 12]

//TrimStart: Limpia espacios al inicio
let hello ='    hello world';
console.log(hello);//    hello world
let trimStart = hello.trimStart();
console.log(trimStart);//hello world

//TrimEnd: Limpia espacios al final
let hello2 ='hello world    ';
console.log(hello);//hello world
let trimEnd = hello.trimEnd();
console.log(trimEnd);//hello world

//Optional catch binding: podemos pasar de manera opcional el parametro de error al valor de catch
try{

} catch(){ //no es necesario pasar el valor y se puede usar
	error
}

//From entries: transforma clave valor a un objeto
let entries = [ ["name","Oscar"],["age",32]];
let fromEntries = Object.fromEntries(entries);
console.log(fromEntries);//{name: "Oscar", age: 32}

//Objeto de tipo simbolo, que permite acceder a una descripcion
let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
let symbol_desc = symbol.description;
console.log(symbol_desc);
//**********************************************************************************++