module.exports = {
  testRegex: '\\.spec\\.js$',
  // Remove enzyme serializer since we're migrating to @testing-library/react
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['cobertura', 'lcov', 'text-summary'],
  coverageDirectory: '<rootDir>/coverage',
  setupFilesAfterEnv: ['./jest/setupTestFramework.js'],
  setupFiles: ['raf/polyfill'],
  roots: ['<rootDir>/src'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
