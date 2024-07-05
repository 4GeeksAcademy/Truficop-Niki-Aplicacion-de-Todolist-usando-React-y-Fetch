import React, { useEffect, useState } from "react";



//create your first component
const Home = () => {
	const [newEntry, setNewEntry]= useState('');
	const [toDoList, setToDoList]= useState(["Make the bed", "Eat"]);
	const [estado, setEstado] = useState(false);
	const conteo = toDoList.length;


	function ratonEncimaDelElemento(index) {
        setEstado(index);
		console.log(`Pasaste el cursor sobre: ${index}`);
    }

    function ratonFueraDelElemento() {
        setEstado(false);
		
    }

	function onSubmit(e) {
		e.preventDefault();
		const nuevaLista = [...toDoList, newEntry];
		setToDoList(nuevaLista)
		setNewEntry('');
		console.log("onSubmit");
	};

	function eliminarElemento(value) {
		const result = toDoList.filter((element, index) => index !== value);
		setToDoList(result);
		
	};

	console.log(toDoList);
	return (
		<div className="container w-50">
			<form onSubmit={onSubmit}>
			<div className="mb-3 text-center">
				<label htmlFor="exampleInputEmail1" className="form-label">To Do List</label>
				<input onChange={(e) => setNewEntry(e.target.value)} value={newEntry} type="text" className="form-control" placeholder="Agregar tarea" id="exampleInput" aria-describedby="emailHelp"/>
			</div>
			</form>
			<ul className="list-group list-group-flush">
				{toDoList.length === 0 ? (
					<p className="text-center">No hay tareas</p>
				) : (
					toDoList.map((item, index) => (
						<li 
							key={index} 
							className="list-group-item d-flex justify-content-between align-items-center" 
							onMouseOver={() => ratonEncimaDelElemento(index)}
							onMouseOut={() => ratonFueraDelElemento()}
						>
							{item}
							{estado === index && (
								<button className="btn btn-danger btn-sm" onClick={() => eliminarElemento(index)}>Eliminar</button>
							)}
						</li>
					))
				)}
			</ul>
			<div className="pt-3 border-top">{conteo} Items left</div>
		</div>
	);
};

export default Home;