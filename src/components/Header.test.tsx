import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header', () => {
  it('renders the header with correct content', () => {
    const { getByText, getByRole } = render(<Header />);

    // Verifica se o logo está presente
    const logo = getByRole('img');
    expect(logo).toHaveAttribute('alt', 'Jockepay');

    // Verifica se os links de navegação estão presentes
    expect(getByText(/Início/i)).toBeInTheDocument();
    expect(getByText(/Benefícios/i)).toBeInTheDocument();
    expect(getByText(/Integrações/i)).toBeInTheDocument();
    expect(getByText(/Segmentos/i)).toBeInTheDocument();
    expect(getByText(/Simulador/i)).toBeInTheDocument();
    expect(getByText(/Contato/i)).toBeInTheDocument();

    // Verifica se o botão de login está presente
    expect(getByText(/Login/i)).toBeInTheDocument();
  });

  it('toggles mobile menu correctly', () => {
    const { getByText, getByRole } = render(<Header />);

    // Verifica se o menu mobile está fechado inicialmente
    const mobileMenu = getByRole('navigation');
    expect(mobileMenu).toHaveClass('hidden');

    // Clica no botão de menu
    const menuButton = getByRole('button');
    fireEvent.click(menuButton);

    // Verifica se o menu mobile está aberto
    expect(mobileMenu).not.toHaveClass('hidden');

    // Clica no botão de menu novamente
    fireEvent.click(menuButton);

    // Verifica se o menu mobile está fechado
    expect(mobileMenu).toHaveClass('hidden');
  });
}); 