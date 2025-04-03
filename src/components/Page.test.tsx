import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from './Page';

describe('Page', () => {
  it('renders the page with correct content', () => {
    const { getByText } = render(
      <Page title="Título da Página" description="Descrição da página">
        <div>Conteúdo da página</div>
      </Page>
    );

    // Verifica se o título está presente
    expect(getByText(/Título da Página/i)).toBeInTheDocument();

    // Verifica se a descrição está presente
    expect(getByText(/Descrição da página/i)).toBeInTheDocument();

    // Verifica se o conteúdo está presente
    expect(getByText(/Conteúdo da página/i)).toBeInTheDocument();
  });
}); 