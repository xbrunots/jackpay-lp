import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders the checkbox with correct content', () => {
    const { getByLabelText } = render(
      <Checkbox label="Aceito os termos" />
    );

    // Verifica se o checkbox está presente
    const checkbox = getByLabelText(/Aceito os termos/i);
    expect(checkbox).toBeInTheDocument();
  });

  it('handles change events correctly', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox label="Aceito os termos" onChange={handleChange} />
    );

    // Clica no checkbox
    const checkbox = getByLabelText(/Aceito os termos/i);
    fireEvent.click(checkbox);

    // Verifica se a função de mudança foi chamada
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('applies the correct variant styles', () => {
    const { getByLabelText, rerender } = render(
      <Checkbox label="Aceito os termos" variant="default" />
    );

    // Verifica se o checkbox tem a classe de variante default
    expect(getByLabelText(/Aceito os termos/i).parentElement).toHaveClass('bg-white');

    // Rerender com variante outlined
    rerender(<Checkbox label="Aceito os termos" variant="outlined" />);

    // Verifica se o checkbox tem a classe de variante outlined
    expect(getByLabelText(/Aceito os termos/i).parentElement).toHaveClass('border');
  });

  it('applies the correct size styles', () => {
    const { getByLabelText, rerender } = render(
      <Checkbox label="Aceito os termos" size="sm" />
    );

    // Verifica se o checkbox tem a classe de tamanho sm
    expect(getByLabelText(/Aceito os termos/i).parentElement).toHaveClass('text-sm');

    // Rerender com tamanho lg
    rerender(<Checkbox label="Aceito os termos" size="lg" />);

    // Verifica se o checkbox tem a classe de tamanho lg
    expect(getByLabelText(/Aceito os termos/i).parentElement).toHaveClass('text-lg');
  });
}); 