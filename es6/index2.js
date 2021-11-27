let name = 'Gianni';
let age ='34';
//Javascript antiguo
obj = {name:name,age:age};
//Es6
//Asignacion de valores a un objeto de manera simplificada
obj2 ={name,age};
console.log(obj2)
//----------------------------------------------------------------------------------++
//Arrow functions
const names = [
	{ name:'Oscar', age:'32'},
	{ name:'Yesica', age:'27'}
];
//Map con funcion anonimas
let listOfNames = names.map(function(item){
	console.log(item.name);
});
//Map con las arrow functions: es una funcion anonima
let listOfNames2 = names.map(
		item =>console.log(item.name)
);
//Otra forma de plantear arrow functions: a traves de constantes
const listOfNames3 = (name, age, country) =>{
	console.log(name);
}
//Pasando un solo parametro
const listOfNames4 = name => {
	console.log(name);
}
//En este ejemplo si usar llaves en un proceso directo
const square = num => num*num;
//----------------------------------------------------------------------------------++
//Promesas: Correcciones de callback hell
//Js no es un lenguaje sincronico.
// SIgnifica algo va a pasar
//Como no tiene parametros se ṕonen los ()
const helloPromise = () => {
	//--CReo la promea y si retorna true sera resolve y si es false reject
	return new Promise((resolve, reject)=>{
		//--
		if(true){
			resolve("SI paso!");
		}else{
			reject("No paso");
		}
		//---
	});//--Fin de la array function de la promesa...
	//--
}
//LLamo a mi promesa
helloPromise()
	.then(response => console.log(response))
	.then(console.log("Este e suna prueba de una promesa"))
	.catch(error=> console.log(error))
//----------------------------------------------------------------------------------++