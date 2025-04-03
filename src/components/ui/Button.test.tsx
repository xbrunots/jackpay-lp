import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  it('renders the button with correct content', () => {
    const { getByText } = render(<Button>Clique aqui</Button>);

    // Verifica se o texto do botão está presente
    expect(getByText(/Clique aqui/i)).toBeInTheDocument();
  });

  it('handles click events correctly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Clique aqui</Button>);

    // Clica no botão
    fireEvent.click(getByText(/Clique aqui/i));

    // Verifica se a função de clique foi chamada
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct variant styles', () => {
    const { getByText, rerender } = render(<Button variant="primary">Clique aqui</Button>);

    // Verifica se o botão tem a classe de variante primary
    expect(getByText(/Clique aqui/i)).toHaveClass('bg-primary');

    // Rerender com variante secondary
    rerender(<Button variant="secondary">Clique aqui</Button>);

    // Verifica se o botão tem a classe de variante secondary
    expect(getByText(/Clique aqui/i)).toHaveClass('bg-secondary');
  });

  it('applies the correct size styles', () => {
    const { getByText, rerender } = render(<Button size="sm">Clique aqui</Button>);

    // Verifica se o botão tem a classe de tamanho sm
    expect(getByText(/Clique aqui/i)).toHaveClass('text-sm');

    // Rerender com tamanho lg
    rerender(<Button size="lg">Clique aqui</Button>);

    // Verifica se o botão tem a classe de tamanho lg
    expect(getByText(/Clique aqui/i)).toHaveClass('text-lg');
  });
}); 