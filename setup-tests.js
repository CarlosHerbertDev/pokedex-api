// setup-tests.js
import '@testing-library/jest-dom';
import { server } from './src/mocks/server';
import { TextDecoder, TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Inicia o MSW antes dos testes
beforeAll(() => server.listen());

// Reseta os handlers após cada teste (caso haja mudanças)
afterEach(() => server.resetHandlers());

// Fecha o servidor após os testes
afterAll(() => server.close());