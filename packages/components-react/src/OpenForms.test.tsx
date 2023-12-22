import { render } from '@testing-library/react';
import { OpenForms } from './OpenForms';
import '@testing-library/jest-dom';

describe('OpenForms', () => {
  it('renders some element', () => {
    const { container } = render(<OpenForms />);

    const element = container.querySelector(':only-child');

    expect(element).toBeInTheDocument();
  });
});
