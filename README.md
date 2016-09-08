# MP project

## Features

- [x] Webpack
- [x] Local Server
- [x] Source Maps
- [x] Live reload
- [x] Development/Production environments
- [x] Concatenation and minification on production
- [x] ES2015
- [x] CSS-preprocessor (SASS)
- [x] Autoprefixer
- [x] Static code analysis (ESLint)
- [x] Unit tests, TDD
- [x] Test Coverage
- [ ] Git hooks: Lint rules, tests and coverage

## SASS

To import `.sass` file add `import './filename.scss';` to your `js` file

## ESLint

Style Guide based on [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

Except few changes:

* indent: 4 spaces

## Unit tests

[Jest](https://facebook.github.io/jest/) is using for unit testing.

To run all tests one time, run:
```bash
$ npm test
```

To get coverage, run:

```bash
$ npm test -- --coverage
```

To run all tests in TDD mode, run:
```bash
$ npm test -- --watch

# With coverage

$ npm test --  --coverage --watch
```

Then press `a` to run all tests or `o` to only run tests related to changed files. Just follow the instructions.
