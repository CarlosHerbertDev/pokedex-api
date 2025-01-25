module.exports = {
    preset: 'vite-plugin-test',
    testEnvironment: 'jsdom', // Definir o ambiente de teste como jsdom, que simula o navegador
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Configurações iniciais do Jest DOM
    transform: {
      // Usar Vite para transformar arquivos .js, .jsx e .ts
      '^.+\\.[t|j]sx?$': 'vite-jest-transformer',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Isso é útil se você usar alias no seu Vite
    },
  };
  