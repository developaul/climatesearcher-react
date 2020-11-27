import React, { useState } from 'react';
import { Header, Form } from './components';

function App() {

	const [ busqueda, setBusqueda ] 	= useState({
		ciudad: '',
		pais: ''
	});

	const [ consultar, setConsultar ] 	= useState( false );

	return (
		<>
			<Header 
				title='Clima React App' 
			/>

			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<div className="col m6 s12">
							<Form
								{ ...busqueda }
								setBusqueda={ setBusqueda }
								setConsultar={ setConsultar }
							/>
						</div>

						<div className="col m6 s12">

						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;