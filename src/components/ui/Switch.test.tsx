import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Switch } from './switch';

describe('Switch', () => {
  it('renders the switch with correct content', () => {
    const { getByRole } = render(
      <Switch label="Ativar" />
    );

    // Verifica se o switch está presente
    const switchElement = getByRole('switch');
    expect(switchElement).toBeInTheDocument();
  });

  it('handles change events correctly', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <Switch label="Ativar" onChange={handleChange} />
    );

    // Clica no switch
    const switchElement = getByRole('switch');
    fireEvent.click(switchElement);

    // Verifica se a função de mudança foi chamada
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('applies the correct variant styles', () => {
    const { getByRole, rerender } = render(
      <Switch label="Ativar" variant="default" />
    );

    // Verifica se o switch tem a classe de variante default
    expect(getByRole('switch').parentElement).toHaveClass('bg-white');

    // Rerender com variante outlined
    rerender(<Switch label="Ativar" variant="outlined" />);

    // Verifica se o switch tem a classe de variante outlined
    expect(getByRole('switch').parentElement).toHaveClass('border');
  });

  it('applies the correct size styles', () => {
    const { getByRole, rerender } = render(
      <Switch label="Ativar" size="sm" />
    );

    // Verifica se o switch tem a classe de tamanho sm
    expect(getByRole('switch').parentElement).toHaveClass('text-sm');

    // Rerender com tamanho lg
    rerender(<Switch label="Ativar" size="lg" />);

    // Verifica se o switch tem a classe de tamanho lg
    expect(getByRole('switch').parentElement).toHaveClass('text-lg');
  });
}); 