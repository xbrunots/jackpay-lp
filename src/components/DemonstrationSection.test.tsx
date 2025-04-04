import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DemonstrationSection from './DemonstrationSection';

describe('DemonstrationSection', () => {
  it('renders the demonstration section with correct content', () => {
    const { getByText, getByRole } = render(<DemonstrationSection />);

    // Verifica se o título está presente
    expect(getByText(/Veja como funciona/i)).toBeInTheDocument();

    // Verifica se o subtítulo está presente
    expect(getByText(/Assista ao vídeo e entenda como a JockPay pode transformar seus pagamentos/i)).toBeInTheDocument();

    // Verifica se o vídeo está presente
    const video = getByRole('video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('controls');
    expect(video).toHaveAttribute('poster', '/video-thumbnail.jpg');
  });
}); 