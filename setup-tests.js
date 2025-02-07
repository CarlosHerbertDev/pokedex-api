// setup-tests.js
import '@testing-library/jest-dom';
import { server } from './src/mocks/server';
import { TextDecoder, TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;


beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());