import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Home from '..';

describe('Home page', () => {
  it('renders and matches the snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('finds the text home', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(screen.getByText('home')).toBeInTheDocument();
  });
});
