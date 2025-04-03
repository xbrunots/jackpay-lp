import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer with correct content', () => {
    const { getByText, getAllByRole } = render(<Footer />);

    // Verifica se o logo está presente
    const logo = getAllByRole('img')[0];
    expect(logo).toHaveAttribute('alt', 'Jockepay');

    // Verifica se os links de navegação estão presentes
    expect(getByText(/Início/i)).toBeInTheDocument();
    expect(getByText(/Benefícios/i)).toBeInTheDocument();
    expect(getByText(/Integrações/i)).toBeInTheDocument();
    expect(getByText(/Segmentos/i)).toBeInTheDocument();
    expect(getByText(/Simulador/i)).toBeInTheDocument();
    expect(getByText(/Contato/i)).toBeInTheDocument();

    // Verifica se os links de redes sociais estão presentes
    expect(getByText(/LinkedIn/i)).toBeInTheDocument();
    expect(getByText(/Twitter/i)).toBeInTheDocument();
    expect(getByText(/Instagram/i)).toBeInTheDocument();

    // Verifica se o texto de copyright está presente
    expect(getByText(/© 2024 Jockepay. Todos os direitos reservados./i)).toBeInTheDocument();
  });
}); 