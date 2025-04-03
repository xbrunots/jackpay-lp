import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import IntegrationsSection from './IntegrationsSection';

describe('IntegrationsSection', () => {
  it('renders the integrations section with correct content', () => {
    const { getByText, getAllByRole } = render(<IntegrationsSection />);

    // Verifica se o título está presente
    expect(getByText(/Integrações/i)).toBeInTheDocument();

    // Verifica se o subtítulo está presente
    expect(getByText(/Conecte-se com os principais players do mercado/i)).toBeInTheDocument();

    // Verifica se os logos das integrações estão presentes
    const integrationLogos = getAllByRole('img');
    expect(integrationLogos).toHaveLength(6); // 6 logos de integração

    // Verifica se os nomes das integrações estão presentes
    expect(getByText(/Mercado Pago/i)).toBeInTheDocument();
    expect(getByText(/Pagar.me/i)).toBeInTheDocument();
    expect(getByText(/Stripe/i)).toBeInTheDocument();
    expect(getByText(/PayPal/i)).toBeInTheDocument();
    expect(getByText(/PagSeguro/i)).toBeInTheDocument();
    expect(getByText(/Braspag/i)).toBeInTheDocument();
  });
}); 