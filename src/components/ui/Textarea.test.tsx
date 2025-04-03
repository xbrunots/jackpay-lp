import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Textarea } from './textarea';

describe('Textarea', () => {
  it('renders the textarea with correct content', () => {
    const { getByPlaceholderText } = render(
      <Textarea placeholder="Digite algo" />
    );

    // Verifica se o textarea está presente
    const textarea = getByPlaceholderText(/Digite algo/i);
    expect(textarea).toBeInTheDocument();
  });

  it('handles change events correctly', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Textarea placeholder="Digite algo" onChange={handleChange} />
    );

    // Digita no textarea
    const textarea = getByPlaceholderText(/Digite algo/i);
    fireEvent.change(textarea, { target: { value: 'Teste' } });

    // Verifica se a função de mudança foi chamada
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it('applies the correct variant styles', () => {
    const { getByPlaceholderText, rerender } = render(
      <Textarea placeholder="Digite algo" variant="default" />
    );

    // Verifica se o textarea tem a classe de variante default
    expect(getByPlaceholderText(/Digite algo/i)).toHaveClass('bg-white');

    // Rerender com variante outlined
    rerender(<Textarea placeholder="Digite algo" variant="outlined" />);

    // Verifica se o textarea tem a classe de variante outlined
    expect(getByPlaceholderText(/Digite algo/i)).toHaveClass('border');
  });

  it('applies the correct size styles', () => {
    const { getByPlaceholderText, rerender } = render(
      <Textarea placeholder="Digite algo" size="sm" />
    );

    // Verifica se o textarea tem a classe de tamanho sm
    expect(getByPlaceholderText(/Digite algo/i)).toHaveClass('text-sm');

    // Rerender com tamanho lg
    rerender(<Textarea placeholder="Digite algo" size="lg" />);

    // Verifica se o textarea tem a classe de tamanho lg
    expect(getByPlaceholderText(/Digite algo/i)).toHaveClass('text-lg');
  });
}); 