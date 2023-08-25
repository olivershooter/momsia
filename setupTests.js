import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';

//extends vitests expect method with methods from react-testing-library
expect.extend(matchers);

//runs a cleanup after each test clearning the dom
afterEach(() => {
  cleanup();
});
