import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ParticlesBackground from './ParticlesBackground';

describe('ParticlesBackground', () => {
  it('renders the canvas element', () => {
    const { container } = render(<ParticlesBackground />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('sets the correct canvas dimensions', () => {
    const { container } = render(<ParticlesBackground />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toHaveStyle({
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '-1',
    });
  });
}); 