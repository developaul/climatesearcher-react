import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Error } from './';

const Form = ({ ciudad, pais, setBusqueda, setConsultar }) => {

    const [ error, setError ] = useState( false );

    const handleChange = e => {
        setBusqueda( busq => ({
            ...busq,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        if( ciudad.trim() === '' || pais.trim() === '' ) {
            setError( true );
            return;
        }

        setError( false );
        setConsultar( true );
    }

    return (
        <form
            onSubmit={ handleSubmit }
        >
            { error && <Error message='Todos los campos son obligatorios' /> }

            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ ciudad }
                    onChange={ handleChange }
                />

                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={ pais }
                    onChange={ handleChange }
                >
                    <option value="">--Seleccione un País---</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>

                <label htmlFor="pais">País: </label>
            </div>

            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                >Buscar Clima</button>
            </div>
        </form>
    );
};

Form.propTypes = {
    ciudad: PropTypes.string.isRequired,
    pais: PropTypes.string.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired
};

export default Form;