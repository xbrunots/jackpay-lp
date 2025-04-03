import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactSection from './ContactSection';

describe('ContactSection', () => {
  it('renders the contact section with correct content', () => {
    const { getByText, getByLabelText } = render(<ContactSection />);

    // Verifica se o título está presente
    expect(getByText(/Entre em contato/i)).toBeInTheDocument();

    // Verifica se o subtítulo está presente
    expect(getByText(/Estamos prontos para ajudar você/i)).toBeInTheDocument();

    // Verifica se os campos do formulário estão presentes
    expect(getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(getByLabelText(/Email/i)).toBeInTheDocument();
    expect(getByLabelText(/Telefone/i)).toBeInTheDocument();
    expect(getByLabelText(/Mensagem/i)).toBeInTheDocument();
  });

  it('handles form submission correctly', () => {
    const { getByLabelText, getByText } = render(<ContactSection />);

    // Preenche os campos do formulário
    fireEvent.change(getByLabelText(/Nome/i), { target: { value: 'João Silva' } });
    fireEvent.change(getByLabelText(/Email/i), { target: { value: 'joao@exemplo.com' } });
    fireEvent.change(getByLabelText(/Telefone/i), { target: { value: '(11) 99999-9999' } });
    fireEvent.change(getByLabelText(/Mensagem/i), { target: { value: 'Gostaria de saber mais sobre a Jockepay' } });

    // Clica no botão de enviar
    fireEvent.click(getByText(/Enviar mensagem/i));

    // Verifica se a mensagem de sucesso está presente
    expect(getByText(/Mensagem enviada com sucesso/i)).toBeInTheDocument();
  });
}); 