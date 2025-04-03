import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SimulatorSection from './SimulatorSection';

describe('SimulatorSection', () => {
  it('renders the simulator section with correct content', () => {
    const { getByText, getByLabelText } = render(<SimulatorSection />);

    // Verifica se o título está presente
    expect(getByText(/Simule seu ganho/i)).toBeInTheDocument();

    // Verifica se os campos do formulário estão presentes
    expect(getByLabelText(/Volume mensal de transações/i)).toBeInTheDocument();
    expect(getByLabelText(/Ticket médio/i)).toBeInTheDocument();
    expect(getByLabelText(/Taxa de aprovação atual/i)).toBeInTheDocument();
  });

  it('calculates the potential gain correctly', () => {
    const { getByLabelText, getByText } = render(<SimulatorSection />);

    // Preenche os campos do formulário
    fireEvent.change(getByLabelText(/Volume mensal de transações/i), { target: { value: '1000' } });
    fireEvent.change(getByLabelText(/Ticket médio/i), { target: { value: '100' } });
    fireEvent.change(getByLabelText(/Taxa de aprovação atual/i), { target: { value: '80' } });

    // Verifica se o resultado está presente
    expect(getByText(/Ganho potencial/i)).toBeInTheDocument();
  });
}); 