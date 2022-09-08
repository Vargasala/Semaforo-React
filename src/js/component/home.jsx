import React, {useState} from "react"; //1. Importar el hooks useState de la libreria de react

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	// valor inicial, la funcion que actualiza el valor inicial
	//     "hola"
	const [state,setState]= useState("Hola"); //2. usar el hooks useState
	const [color,setColor]= useState("btn-success");

	function saludar() {
		// alert(state)
		if(state === "Hola"){
			setState("If you see this green button... bootstrap is working...")
		}else{
			setState("Hola")
		}
	}

	function cambiarColor() {
		// if(color === "btn-success"){//true
		// 	setColor("btn-danger")
		// }else{//false
		// 	setColor("btn-success")
		// }
		// condicion ? true : false
		color === "btn-success"? setColor("btn-danger"):setColor("btn-success")
		state === "Hola"? setState("If you see this green button... bootstrap is working..."):setState("Hola")
	}
console.log(state);
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			                    {/* btn-success */}
			<a href="#" className={"btn "+color} onClick={cambiarColor}>
				{/* "hola" */}
				{state}
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
