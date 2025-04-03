import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('renders the hero section with correct content', () => {
    const { getByText } = render(<HeroSection />);

    // Verifica se o título está presente
    expect(getByText(/Orquestre pagamentos com/i)).toBeInTheDocument();
    expect(getByText(/autonomia/i)).toBeInTheDocument();
    expect(getByText(/e escala/i)).toBeInTheDocument();

    // Verifica se o subtítulo está presente
    expect(getByText(/Infraestrutura de pagamentos do futuro/i)).toBeInTheDocument();

    // Verifica se a descrição está presente
    expect(getByText(/Integre múltiplos PSPs, aumente sua taxa de aprovação e otimize transações sem depender de checkout próprio/i)).toBeInTheDocument();

    // Verifica se os botões estão presentes
    expect(getByText(/Simule seu ganho/i)).toBeInTheDocument();
    expect(getByText(/Agende uma demonstração/i)).toBeInTheDocument();
  });

  it('renders the dashboard preview', () => {
    const { getByText } = render(<HeroSection />);

    // Verifica se o título do dashboard está presente
    expect(getByText(/Jockepay Dashboard/i)).toBeInTheDocument();

    // Verifica se o status "Ao vivo" está presente
    expect(getByText(/Ao vivo/i)).toBeInTheDocument();

    // Verifica se as rotas de pagamento estão presentes
    expect(getByText(/PSP 1 \| Aprovado/i)).toBeInTheDocument();
    expect(getByText(/PSP 2 \| Recusado/i)).toBeInTheDocument();
    expect(getByText(/PSP 3 \| Em análise/i)).toBeInTheDocument();
  });
}); 