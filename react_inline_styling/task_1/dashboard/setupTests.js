import '@testing-library/jest-dom';
import { StyleSheet, css } from 'aphrodite';


jest.mock('aphrodite', () => ({
  StyleSheet: {
    create: (styles) => styles,
  },
  css: (...args) => args.join(' '),
}));