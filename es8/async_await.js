//-----------------------------------------------------------------------------------++
/*
*	Async Await
*/
const helloWorld = ()=>{
	return new Promise((resolve,reject)=>{
		(true) 
			? setTimeout(()=> resolve("Hello world"),3000)
			: reject(new Error("Test Error"))
	})
};
//Es una funcion que va a implementar async y await
const helloAsync = async() =>{
	const hello = await helloWorld();
	console.log(hello)
}
//llamamos a la funcion
helloAsync();
/*
*	Otra forma de usar async await, usando try catch
*/
const anotherFunction = async() => {
	try{
		const hello = await helloWorld();
		console.log(hello);
	}catch(error){
		console.log(error);
	}
}
anotherFunction();
/**/

//-----------------------------------------------------------------------------------++