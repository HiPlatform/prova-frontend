const path = require('path');
const babel = require('babel-core');

module.exports = (wallaby) => {
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(__dirname, 'node_modules') +
    path.delimiter +
    path.join(__dirname, 'node_modules/react-scripts/node_modules');

  // eslint-disable-next-line no-underscore-dangle, global-require
  require('module').Module._initPaths();

  return {
    files: [
      'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      '!src/**/*.test.js?(x)',
      '!src/index.js',
      '!src/registerServiceWorker.js',
    ],

    tests: ['src/**/*.test.js?(x)'],

    filesWithNoCoverageCalculated: [
      'src/setupTests.js',
    ],

    env: {
      type: 'node',
      runner: 'node',
    },

    compilers: {
      '**/*.+(js|jsx)': wallaby.compilers.babel({
        babel,
        presets: ['react-app'],
      }),
    },

    setup(conf) {
      const jestConfig = {
        setupFiles: ['<rootDir>/src/setupTests.js'],
        testPathIgnorePatterns: ['<rootDir>/node_modules/'],
        moduleNameMapper: {
          '^.+\\.(jpg|jpeg|png|gif|svg)$': require.resolve('react-scripts/config/jest/fileTransform.js'),
          '^.+\\.css$': require.resolve('react-scripts/config/jest/cssTransform.js'),
        },
      };
      conf.testFramework.configure(jestConfig);
    },

    testFramework: 'jest',
  };
};
