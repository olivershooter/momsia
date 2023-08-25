import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import About from '..';

describe('About page', () => {
  it('renders and matches the snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
