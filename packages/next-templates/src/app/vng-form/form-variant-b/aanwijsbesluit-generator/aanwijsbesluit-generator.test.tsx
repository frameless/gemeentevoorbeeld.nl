/**
 * @license EUPL-1.2
 * Copyright (c) 2024 Frameless B.V.
 */

import { render, screen } from '@testing-library/react';
import { Heading1 } from '@utrecht/component-library-react';

describe('Form input', () => {
  it('should validate form fields', async () => {});
});

describe('Aanwijzingsbesluit data', () => {
  it('renders an article with data from form', () => {
    const data = validatedData();
    render(<Heading1></Heading1>);
  });
});
