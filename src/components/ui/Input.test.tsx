import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './input';

describe('Input', () => {
  it('renders the input with correct content', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Digite algo" />
    );

    // Verifica se o input está presente
    const input = getByPlaceholderText(/Digite algo/i);
    expect(input).toBeInTheDocument();
  });

  it('handles change events correctly', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Digite algo" onChange={handleChange} />
    );

    // Digita no input
    const input = getByPlaceholderText(/Digite algo/i);
    fireEvent.change(input, { target: { value: 'Teste' } });

    // Verifica se a função de mudança foi chamada
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it('applies the correct variant styles', () => {
    const { getByPlaceholderText, rerender } = render(
      <Input placeholder="Digite algo" variant="default" />
    );

    // Verifica se o input tem a classe de variante default
    expect(getByPlaceholderText(/Digite algo/i)).toHaveClass('bg-white');

    // Rerender com variante outlined
    rerender(<Input placeholder="Digite algo" variant="outlined" />);

    // Verifica se o input tem a classe de variante outlined
    expect(getByPlaceholderText(/Digite algo/i)).toHaveClass('border');
  });

  it('applies the correct size styles', () => {
    const { getByPlaceholderText, rerender } = render(
      <Input placeholder="Digite algo" size="sm" />
    );

    // Verifica se o input tem a classe de tamanho sm
    expect(getByPlaceholderText(/Digite algo/i)).toHaveClass('text-sm');

    // Rerender com tamanho lg
    rerender(<Input placeholder="Digite algo" size="lg" />);

    // Verifica se o input tem a classe de tamanho lg
    expect(getByPlaceholderText(/Digite algo/i)).toHaveClass('text-lg');
  });
}); 