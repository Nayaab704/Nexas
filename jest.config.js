const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
  ],
  testMatch: [
    '**/tests/**/*.test.(ts|js)',
  ],
  transformIgnorePatterns: ['/node_modules/']
};

export default config;
