import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

//extends vitests expect method with methods from react-testing-library
expect.extend(matchers);

//runs a cleanup after each test clearning the dom
afterEach(() => {
  cleanup();
});
