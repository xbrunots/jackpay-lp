import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from './Layout';

describe('Layout', () => {
  it('renders the layout with correct content', () => {
    const { getByRole } = render(
      <Layout>
        <div>Conteúdo</div>
      </Layout>
    );

    // Verifica se o header está presente
    const header = getByRole('banner');
    expect(header).toBeInTheDocument();

    // Verifica se o main está presente
    const main = getByRole('main');
    expect(main).toBeInTheDocument();

    // Verifica se o footer está presente
    const footer = getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
}); 