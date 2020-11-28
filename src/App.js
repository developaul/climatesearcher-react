import React, { useState, useEffect } from 'react';
import { Header, Form, Climate, Error } from './components';

function App() {

	const [ busqueda, setBusqueda ] 	= useState({
		ciudad: '',
		pais: ''
	});

	const [ consultar, setConsultar ] 	= useState( false );

	const [ resultado, guardarResultado ] 	= useState( {} );
	const [ error, guardarError ]			= useState( false );

	const { ciudad, pais } = busqueda;

	useEffect( () => {

		const consultarAPI = async () => {
			
			if( consultar ) {		
				const appId = '15ae403f163fcbbd6f8cf3387e5f924c';
				const url 	= `https://api.openweathermap.org/data/2.5/weather?q=${ ciudad },${ pais }&appid=${ appId }`;
				
				const resp 	= await fetch( url );
				const resl 	= await resp.json();
				
				guardarResultado( resl );
				setConsultar( false );

				// Detecta si hubo resultados correctos
				if( resultado.cod === 200 ) {
					guardarError( false );
				} else {
					guardarError( true );
				}
			}

		}

		consultarAPI();
		// eslint-disable-next-line
	}, [ consultar ] );

	let componente;

	if( error ) {
		componente = <Error message='No hay resultados' />
	} else {
		componente = <Climate { ...resultado } />
	}


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
							{ componente }
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;