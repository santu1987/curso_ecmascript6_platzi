//Usar valores enteros mayores aun bigint 2^53

//Le ponemos al final del numero la letra n
const aBigNumber = 99990909090909090n;
//Segunda forma usar el metodo BigInt() el numero en cuestion
const anotherBigNumber = BigInt(99990909090909090);

//--------------------------------------------------------------------------------++
//Promise.allSettled: luego que todas las promesas que se resuelve una vez se hayan cumplido o rechazado

const promise1 = new Promise((resolve,reject)=> reject("reject"));
const promise2 = new Promise((resolve,reject)=> resolve("resolve"));
const promise3 = new Promise((resolve,reject)=> resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
		.then(response => console.log(response));

//Con promise.all si encuentra la que no se cumple hasta ahi llega, en este caso muestra todas

//--------------------------------------------------------------------------------++
//Global this: ME permite tener acceso de forma global a metodos globales de js
console.log(window);
console.log(this);
console.log(self);
console.log(frames);
//Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
//Nos ofrece una forma standar de acceder al objeto global
console.log(globalThis);
//De esta forma no es uno especifico sino que nos muestra todos los objetos globales
//---------------------------------------------------------------------------------++
//Operador null: devuelve su operando del lado derecho si es null o undefined de lo contrario el de lado izquiero
const fooo = null ?? "default string"
//devuelve nulo
const fooo = 'aaaaaa' ?? "default string"
//Devuelve aaaaaa

//---------------------------------------------------------------------------------++
//Optional chaning: busca por niveles si el objeto tiene esos elementos
const user = {};
console.log(user?.profile?.email);
//De esta forma no rompe la app, valida con el signo? si un campo esta disponible
if(user?.profile?.email){
	console.log('Email');
}else{
	console.log('Fake');
}
//Devuelve undefined y luego Fake
//---------------------------------------------------------------------------------++
