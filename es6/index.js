//Valores por defecto:
//Ejemplo de funcion con la forma anterior de js
//En esta version  solo recibo los valores por partametros, y luego se asigna los valores por defecto
function newFUnctiopn(name,age, country){
	var name =  name || 'Gianni';
	var age = age || 34;
	var country = country || 'VE';
	console.log(name, age,country);
}

//es6: En esta version puedo asignar valores en los parametros
function newFunction2(name ='Gianni', age='34', country="VE"){
	console.log(name, age,country)
}
//
newFunction2();
newFunction2('Oscar', '32', 'MX');
//----------------------------------------------------------------------------**
//Templates literals:
//COmo se realizaban concatenaciones en js
let hello = "Hello";
let world = "world";
let epicPhrase = hello +''+world;
console.log(epicPhrase);

//En esc6
//De esta forma se realiza un template literal, a través de comillas fancesas
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
//---------------------------------------------------------------------------++

//Multi linea
//En js antiguo:
let lorem = "lorem ipsum quiero escribir una frase epica que necesitamos \n"
			+"otra frase que necesitabamos";
console.log(lorem);

//En Ecs6
let lorem2 = `Otra frase epica que necesitamos
Y sin problemas 
puede ocupar 
varias lineas
`;
console.log(lorem2);
//
//--------------------------------------------------------------------------++
//Destructurar elementos : Seprarlos en variables para mostrarlos y usarlos
//Js Antiguo
let person = {
	'name':'Oscar',
	'age': 32,
	'country': 'MX',
}
console.log(person.name);
console.log(person.age);

//En esc6
let { name, age, country} = person;
console.log(name, age);
//--------------------------------------------------------------------------++
//Operador de propagacion: Spread operator
//Varios elementos en arreglo y unirlos para presentarlos
let team1 = ['Oscar','Julian','Ricardo'];
let team2 = ['Valeria', 'Yesica','Camila']
//Es una forma de unificar dos array en otro a traves de estos caracteres ...
let education = ['David',...team1,...team2];
console.log(education);
//--------------------------------------------------------------------------++
//Let y const:
//Let
var hola = 'hola';///en el scope global
let hola = 'hola';/// va a estar solo en el scope local

{
	var globalVar = "Global Var";
}

{
	let globalLet = "GLobal Let";
}
console.log(globalVar);
console.log(globalLet);
//global Let solo se muestra en su propio bloque de codigo, se muestra en el scope local
//--
//const
const a ='b'
//No puedo reasignar su valor porque es una constante
//--------------------------------------------------------------------------++
