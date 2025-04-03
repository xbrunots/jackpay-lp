import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Alert from './Alert';

describe('Alert', () => {
  it('renders the alert with correct content', () => {
    const { getByText } = render(
      <Alert title="Título" description="Descrição" />
    );

    // Verifica se o título está presente
    expect(getByText(/Título/i)).toBeInTheDocument();

    // Verifica se a descrição está presente
    expect(getByText(/Descrição/i)).toBeInTheDocument();
  });

  it('applies the correct variant styles', () => {
    const { getByText, rerender } = render(
      <Alert title="Título" description="Descrição" variant="default" />
    );

    // Verifica se o alert tem a classe de variante default
    expect(getByText(/Título/i).parentElement).toHaveClass('bg-white');

    // Rerender com variante outlined
    rerender(<Alert title="Título" description="Descrição" variant="outlined" />);

    // Verifica se o alert tem a classe de variante outlined
    expect(getByText(/Título/i).parentElement).toHaveClass('border');
  });

  it('applies the correct type styles', () => {
    const { getByText, rerender } = render(
      <Alert title="Título" description="Descrição" type="success" />
    );

    // Verifica se o alert tem a classe de tipo success
    expect(getByText(/Título/i).parentElement).toHaveClass('bg-green-50');

    // Rerender com tipo error
    rerender(<Alert title="Título" description="Descrição" type="error" />);

    // Verifica se o alert tem a classe de tipo error
    expect(getByText(/Título/i).parentElement).toHaveClass('bg-red-50');

    // Rerender com tipo warning
    rerender(<Alert title="Título" description="Descrição" type="warning" />);

    // Verifica se o alert tem a classe de tipo warning
    expect(getByText(/Título/i).parentElement).toHaveClass('bg-yellow-50');

    // Rerender com tipo info
    rerender(<Alert title="Título" description="Descrição" type="info" />);

    // Verifica se o alert tem a classe de tipo info
    expect(getByText(/Título/i).parentElement).toHaveClass('bg-blue-50');
  });
}); 