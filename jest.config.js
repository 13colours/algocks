/* eslint-disable */
module.exports = {
  clearMocks: true,
  roots: [`<rootDir>/src`],
  preset: `ts-jest`,
  testEnvironment: `node`,
  collectCoverageFrom: [`src/**/*.{js,ts}`],
  coverageDirectory: `coverage`,
}
