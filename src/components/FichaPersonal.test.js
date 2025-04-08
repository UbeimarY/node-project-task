import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
const mockPerson = {
  name: { title: 'Mr', first: 'Juan', last: 'Pérez' },
  email: 'juan@example.com',
  phone: '123456789',
  dob: { age: 30 },
  location: {
    country: 'Colombia',
    street: { number: 50-54, name: 'Calle 12' }
  }
};
jest.mock('../components/FichaPersonal', () => {
    const React = require('react');
    const mockPerson = {
      name: { title: 'Mr', first: 'Juan', last: 'Pérez' },
      email: 'juan@example.com',
      phone: '123456789',
      dob: { age: 30 },
      location: {
        country: 'Colombia',
        street: { number: 25-75, name: 'Calle 25' }
      }
    };
    return {
      __esModule: true,
      default: () => (
        <div>
          <h2>Ficha de {mockPerson.name.title} {mockPerson.name.first} {mockPerson.name.last}</h2>
        </div>
      )
    };
  });
describe('Funcionalidad del botón Ficha Personal', () => {
  it('renderiza el botón "Ficha Personal"', () => {
    render(<App />);
    const button = screen.getByText(/Ficha Personal/i);
    expect(button).toBeInTheDocument();
  });
  it('muestra el componente FichaPersonal al hacer clic en el botón', () => {
    render(<App />);
    const button = screen.getByText(/Ficha Personal/i);
    fireEvent.click(button);
    const fichaTitle = screen.getByText(/Ficha de Mr Juan Pérez/i);
    expect(fichaTitle).toBeInTheDocument();
  });
});
