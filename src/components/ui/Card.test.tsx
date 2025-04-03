import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card', () => {
  it('renders the card with correct content', () => {
    const { getByText } = render(
      <Card>
        <Card.Header>
          <Card.Title>Título do Card</Card.Title>
          <Card.Description>Descrição do Card</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Conteúdo do Card</p>
        </Card.Content>
        <Card.Footer>
          <p>Rodapé do Card</p>
        </Card.Footer>
      </Card>
    );

    // Verifica se o título está presente
    expect(getByText(/Título do Card/i)).toBeInTheDocument();

    // Verifica se a descrição está presente
    expect(getByText(/Descrição do Card/i)).toBeInTheDocument();

    // Verifica se o conteúdo está presente
    expect(getByText(/Conteúdo do Card/i)).toBeInTheDocument();

    // Verifica se o rodapé está presente
    expect(getByText(/Rodapé do Card/i)).toBeInTheDocument();
  });

  it('applies the correct variant styles', () => {
    const { getByText, rerender } = render(
      <Card variant="default">
        <Card.Content>Conteúdo do Card</Card.Content>
      </Card>
    );

    // Verifica se o card tem a classe de variante default
    expect(getByText(/Conteúdo do Card/i).parentElement).toHaveClass('bg-white');

    // Rerender com variante outlined
    rerender(
      <Card variant="outlined">
        <Card.Content>Conteúdo do Card</Card.Content>
      </Card>
    );

    // Verifica se o card tem a classe de variante outlined
    expect(getByText(/Conteúdo do Card/i).parentElement).toHaveClass('border');
  });
}); 