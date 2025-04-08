import React from "react";
import PropTypes from "prop-types";
export default function FichaPersonal({ person }) {
  if (!person) return null;
  return (
    <div className="FichaPersonal">
      <h2>Ficha de {person.name.title} {person.name.first} {person.name.last}</h2>
      <p><strong>Email:</strong> {person.email}</p>
      <p><strong>Teléfono:</strong> {person.phone}</p>
      <p><strong>Edad:</strong> {person.dob.age}</p>
      <p><strong>País:</strong> {person.location.country}</p>
      <p><strong>Dirección:</strong> {person.location.street.number} {person.location.street.name}</p>
    </div>
  );
}
// Validación de props con PropTypes
FichaPersonal.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.shape({
      title: PropTypes.string.isRequired,
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    dob: PropTypes.shape({
      age: PropTypes.number.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      country: PropTypes.string.isRequired,
      street: PropTypes.shape({
        number: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
