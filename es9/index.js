/*
*	Que se implemento en es9
*/
//----------------------------------------------------------------------------------++
//Operador de reposo

const obj = {
	name: 'oscar',
	age:32,
	country: 'MX'
};
//forma 1, encabezando el nombre
let { name, ...all} = obj;
console.log(name, all);

//froma 2, encabezando el pais, peor al imprimir solo all muestra el resto del objeto
let{ country, ...all} = obj;
console.log(all);

//Propiedades de propagación para unir propiedades de un objeto a un nuevo objeto
const obj = {
	name: 'Oscar',
	age: 32
}

//al usar estos caracteres ... tomo los campos del objeto anterior y los uno al nuevo.
const obj1 = {
	...obj,
	country : 'MX',
}
console.log(obj1);//Muestra: {name: "Oscar", age: 32, country: "MX"}

//---------------------------------------------------------------------------------++
//Promise Finally
const helloWorld = () =>{
	return new Promise((resolve,reject)=>{
		(true)
			//? resolve('Hello World')
			? setTimeout( ()=> resolve("Hello World"),3000 )
			: reject(new Error('Test Error'))
	});
};

//Un nuevo metodo llamado finally que puede ejecutar un proceso al finalizar la promesa
helloWorld()
	.then(response => console.log(response))
	.catch(error => console.log(error))
	.finally( () => console.log('Finalizado'));

//Bloques de regex y poder acceder a ellos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
//match
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
//---------------------------------------------------------------------------------++