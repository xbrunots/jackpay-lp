import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SegmentsSection from './SegmentsSection';

describe('SegmentsSection', () => {
  it('renders the segments section with correct content', () => {
    const { getByText, getAllByRole } = render(<SegmentsSection />);

    // Verifica se o título está presente
    expect(getByText(/Segmentos/i)).toBeInTheDocument();

    // Verifica se o subtítulo está presente
    expect(getByText(/Soluções personalizadas para cada negócio/i)).toBeInTheDocument();

    // Verifica se os cards de segmentos estão presentes
    const segmentCards = getAllByRole('article');
    expect(segmentCards).toHaveLength(4);

    // Verifica se os títulos dos segmentos estão presentes
    expect(getByText(/E-commerce/i)).toBeInTheDocument();
    expect(getByText(/Marketplace/i)).toBeInTheDocument();
    expect(getByText(/SaaS/i)).toBeInTheDocument();
    expect(getByText(/Fintech/i)).toBeInTheDocument();

    // Verifica se as descrições dos segmentos estão presentes
    expect(getByText(/Aumente suas conversões com nossa solução de pagamentos para e-commerce./i)).toBeInTheDocument();
    expect(getByText(/Gerencie pagamentos de múltiplos vendedores com facilidade./i)).toBeInTheDocument();
    expect(getByText(/Integre pagamentos recorrentes em sua plataforma SaaS./i)).toBeInTheDocument();
    expect(getByText(/Ofereça soluções financeiras inovadoras para seus clientes./i)).toBeInTheDocument();
  });
}); 