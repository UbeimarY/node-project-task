import './Person.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import FichaPersonal from './FichaPersonal';

function Person({ person }) {
    const [mostrarFicha, setMostrarFicha] = useState(false);

    const toggleFicha = () => {
        setMostrarFicha((prev) => !prev);
    };

    return (
        <div className="Person">
            <div className="Person-image">
                <img
                    alt={`${person.name.title} ${person.name.first}`}
                    src={person.picture.medium}
                />
            </div>
            <div className="Person-name">
                {person.name.title} {person.name.first}
            </div>
            <div className="Person-location">
                {person.location.city} <br /> {person.location.state}
            </div>

            <button className="toggle-button" onClick={toggleFicha}>
                {mostrarFicha ? 'Ocultar ficha personal' : 'Ver ficha personal'}
            </button>

            {mostrarFicha && (
                <div className="Ficha-container">
                    <FichaPersonal person={person} />
                </div>
            )}
        </div>
    );
}

Person.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.shape({
            title: PropTypes.string.isRequired,
            first: PropTypes.string.isRequired,
            last: PropTypes.string,
        }).isRequired,
        picture: PropTypes.shape({
            medium: PropTypes.string.isRequired,
        }).isRequired,
        location: PropTypes.shape({
            city: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired,
            country: PropTypes.string,
            street: PropTypes.shape({
                name: PropTypes.string,
                number: PropTypes.number,
            }),
        }).isRequired,
        email: PropTypes.string,
        phone: PropTypes.string,
        dob: PropTypes.shape({
            age: PropTypes.number,
        }),
    }).isRequired,
};

export default Person;
