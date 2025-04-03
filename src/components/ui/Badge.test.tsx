import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Badge from './Badge';

describe('Badge', () => {
  it('renders the badge with correct content', () => {
    const { getByText } = render(<Badge>Novo</Badge>);

    // Verifica se o texto do badge está presente
    expect(getByText(/Novo/i)).toBeInTheDocument();
  });

  it('applies the correct variant styles', () => {
    const { getByText, rerender } = render(
      <Badge variant="default">Novo</Badge>
    );

    // Verifica se o badge tem a classe de variante default
    expect(getByText(/Novo/i)).toHaveClass('bg-gray-100');

    // Rerender com variante outlined
    rerender(<Badge variant="outlined">Novo</Badge>);

    // Verifica se o badge tem a classe de variante outlined
    expect(getByText(/Novo/i)).toHaveClass('border');
  });

  it('applies the correct type styles', () => {
    const { getByText, rerender } = render(
      <Badge type="success">Novo</Badge>
    );

    // Verifica se o badge tem a classe de tipo success
    expect(getByText(/Novo/i)).toHaveClass('bg-green-100');

    // Rerender com tipo error
    rerender(<Badge type="error">Novo</Badge>);

    // Verifica se o badge tem a classe de tipo error
    expect(getByText(/Novo/i)).toHaveClass('bg-red-100');

    // Rerender com tipo warning
    rerender(<Badge type="warning">Novo</Badge>);

    // Verifica se o badge tem a classe de tipo warning
    expect(getByText(/Novo/i)).toHaveClass('bg-yellow-100');

    // Rerender com tipo info
    rerender(<Badge type="info">Novo</Badge>);

    // Verifica se o badge tem a classe de tipo info
    expect(getByText(/Novo/i)).toHaveClass('bg-blue-100');
  });

  it('applies the correct size styles', () => {
    const { getByText, rerender } = render(
      <Badge size="sm">Novo</Badge>
    );

    // Verifica se o badge tem a classe de tamanho sm
    expect(getByText(/Novo/i)).toHaveClass('text-xs');

    // Rerender com tamanho lg
    rerender(<Badge size="lg">Novo</Badge>);

    // Verifica se o badge tem a classe de tamanho lg
    expect(getByText(/Novo/i)).toHaveClass('text-sm');
  });
}); 