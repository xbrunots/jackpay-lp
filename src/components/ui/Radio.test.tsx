import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Radio from './Radio';

describe('Radio', () => {
  it('renders the radio with correct content', () => {
    const { getByLabelText } = render(
      <Radio label="Opção 1" value="1" />
    );

    // Verifica se o radio está presente
    const radio = getByLabelText(/Opção 1/i);
    expect(radio).toBeInTheDocument();
  });

  it('handles change events correctly', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <Radio label="Opção 1" value="1" onChange={handleChange} />
    );

    // Clica no radio
    const radio = getByLabelText(/Opção 1/i);
    fireEvent.click(radio);

    // Verifica se a função de mudança foi chamada
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('1');
  });

  it('applies the correct variant styles', () => {
    const { getByLabelText, rerender } = render(
      <Radio label="Opção 1" value="1" variant="default" />
    );

    // Verifica se o radio tem a classe de variante default
    expect(getByLabelText(/Opção 1/i).parentElement).toHaveClass('bg-white');

    // Rerender com variante outlined
    rerender(<Radio label="Opção 1" value="1" variant="outlined" />);

    // Verifica se o radio tem a classe de variante outlined
    expect(getByLabelText(/Opção 1/i).parentElement).toHaveClass('border');
  });

  it('applies the correct size styles', () => {
    const { getByLabelText, rerender } = render(
      <Radio label="Opção 1" value="1" size="sm" />
    );

    // Verifica se o radio tem a classe de tamanho sm
    expect(getByLabelText(/Opção 1/i).parentElement).toHaveClass('text-sm');

    // Rerender com tamanho lg
    rerender(<Radio label="Opção 1" value="1" size="lg" />);

    // Verifica se o radio tem a classe de tamanho lg
    expect(getByLabelText(/Opção 1/i).parentElement).toHaveClass('text-lg');
  });
}); 