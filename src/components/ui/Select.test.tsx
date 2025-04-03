import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Select } from './select';

describe('Select', () => {
  const options = [
    { value: '1', label: 'Opção 1' },
    { value: '2', label: 'Opção 2' },
    { value: '3', label: 'Opção 3' },
  ];

  it('renders the select with correct content', () => {
    const { getByText } = render(
      <Select options={options} placeholder="Selecione uma opção" />
    );

    // Verifica se o placeholder está presente
    expect(getByText(/Selecione uma opção/i)).toBeInTheDocument();
  });

  it('handles change events correctly', () => {
    const handleChange = jest.fn();
    const { getByText } = render(
      <Select options={options} onChange={handleChange} />
    );

    // Clica no select
    const select = getByText(/Selecione uma opção/i);
    fireEvent.click(select);

    // Clica em uma opção
    const option = getByText(/Opção 1/i);
    fireEvent.click(option);

    // Verifica se a função de mudança foi chamada
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('1');
  });

  it('applies the correct variant styles', () => {
    const { getByText, rerender } = render(
      <Select options={options} variant="default" />
    );

    // Verifica se o select tem a classe de variante default
    expect(getByText(/Selecione uma opção/i).parentElement).toHaveClass('bg-white');

    // Rerender com variante outlined
    rerender(<Select options={options} variant="outlined" />);

    // Verifica se o select tem a classe de variante outlined
    expect(getByText(/Selecione uma opção/i).parentElement).toHaveClass('border');
  });

  it('applies the correct size styles', () => {
    const { getByText, rerender } = render(
      <Select options={options} size="sm" />
    );

    // Verifica se o select tem a classe de tamanho sm
    expect(getByText(/Selecione uma opção/i).parentElement).toHaveClass('text-sm');

    // Rerender com tamanho lg
    rerender(<Select options={options} size="lg" />);

    // Verifica se o select tem a classe de tamanho lg
    expect(getByText(/Selecione uma opção/i).parentElement).toHaveClass('text-lg');
  });
}); 