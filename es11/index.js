/*
*	Características de ecmaScript 2020
*/
//Dynamics imports
const button = document.getElementById("btn");

button.addEventListener("click", async function(){
//Dentro del llamado al hacer click se ejecuta la importacion
	const module = await import("./file.js");
	module.hello();
});