import React, {useState} from "react"; //1. Importar el hooks useState de la libreria de react

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	// valor inicial, la funcion que actualiza el valor inicial
	//     "hola"
	const [colorAmarillo,setColorAmarillo]= useState("bg-opacity-25"); //2. usar el hooks useState
	const [colorVerde,setColorVerde]= useState("bg-opacity-25");
	const [colorRojo,setColorRojo]= useState("bg-opacity-25");

	// function saludar() {
	// 	// alert(state)
	// 	if(state === "Hola"){
	// 		setState("If you see this green button... bootstrap is working...")
	// 	}else{
	// 		setState("Hola")
	// 	}
	// }

	function cambiarColorVerde() {
		if (colorVerde === "bg-opacity-25") {
			setColorVerde("bg-opacity-100");
			setColorRojo("bg-opacity-25");
			setColorAmarillo("bg-opacity-25");
		} else {
			setColorVerde("bg-opacity-25");
		}
	 }

	function cambiarColorAmarillo() {

		if (colorAmarillo === "bg-opacity-25") {
			setColorAmarillo("bg-opacity-100");
			setColorRojo("bg-opacity-25");
			setColorVerde("bg-opacity-25");
		}	else {
			setColorAmarillo("bg-opacity-25");
		}
	}

	function cambiarColorRojo() {
		if (colorRojo=== "bg-opacity-25") {
			setColorRojo("bg-opacity-100");
			setColorVerde("bg-opacity-25");
			setColorAmarillo("bg-opacity-25");
		}	else {
			setColorRojo("bg-opacity-25");
		}
	}

console.log (colorRojo);
console.log (colorAmarillo);
console.log (colorVerde);

	return (
		<div className="card justify-content-center ">
			<div className="card-body justify-content-center bg-dark" style={{height: '400px', width: '125px', paddingTop:'50px', paddingLeft:'25px'}}>
				<div style={{height: '80px', width: '75px'}} className= {"bg-danger p-2 text-dark " +colorRojo+ " rounded-circle"} onClick = {cambiarColorRojo}></div>
				<br></br>
				<div style={{height: '80px', width: '75px'}} className= {"bg-warning p-2 text-dark " +colorAmarillo+ " rounded-circle"} onClick = {cambiarColorAmarillo}></div>
				<br></br>
				<div style={{height: '80px', width: '75px'}} className= {"bg-success p-2 text-dark " +colorVerde+ " rounded-circle"} onClick = {cambiarColorVerde}></div>
			</div>
		</div>
	);
};

export default Home;
