import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Contact from '..';

describe('Contact page', () => {
  it('renders and matches the snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
