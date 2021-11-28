/*
*	Caracteristicas es12 = 2021
*/
//------------------------------------------------------------------------------------++
//replaceAll: 
const string = "Javascript es maravilloso, Javascript es lo mejor";
const replacedString = string.replace("Javascript","Python");
console.log(replacedString);//Python es maravilloso, Javascript es lo mejor
//Solo sustituye la primera palabra que consiga

const replacedString2 = string.replaceAll("Javascript","Python");
console.log(replacedString2);//Python es maravilloso, Python es lo mejor

//-----------------------------------------------------------------------------------++
//Clases privadas
//Con el caracter# indicamos que el metodo es privado y solo puede accederse a través de un metodo de la clase
class Message{
	#show(val){
		console.log(val);
	}
	#get(){
		....
	}
}
//------------------------------------------------------------------------------------++
//PromiseAny: Objeto global cuyo argumento va a ser un array de promesas y capturando la primera de forma satisfactoria
const promise1 = new Promise((resolve,reject)=> reject(1));
const promise2 = new Promise((resolve,reject)=> resolve(2));
const promise3 = new Promise((resolve,reject)=> resolve(3));

Promise.any([promise1,promise2,promise3])
		.then(response => console.log(response));
//Devuelve el 2
//------------------------------------------------------------------------------------++

//------------------------------------------------------------------------------------++

/***/