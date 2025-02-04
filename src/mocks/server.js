import { setupServer } from 'msw/node'; // Certifique-se de que isso está correto
import { handlers } from './handlers'; // Caminho correto para o arquivo de handlers

export const server = setupServer(...handlers);