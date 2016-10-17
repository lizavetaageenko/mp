# MP project

## Dev Env Features

- [x] Webpack to bundle FE
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
- [x] Git hooks: Lint rules, tests and coverage
- [ ] Webpack to bundle BE
- [ ] Watch and reload BE (PM2)
- [ ] Configure `WebpackDevServer` to be able to use `browserHistory` in `react-router`

## App TODO list

- [ ] Give app the coolest name ever
- [x] [BE] Create a new game
- [x] [BE] Connect to created game
- [ ] [BE] Update `game.status` on 'start game'
- [ ] [BE] Randomly pick 10 locations and set 1 to `game.location`
- [ ] [BE] Randomly choose a spy
- [ ] [BE] Start timer on 'start game'
- [ ] [BE] Emit 'game started' with updated game data
- [ ] To be continued ...

## Known issues
- [ ] Player socket is not added to game room after get game-status

## FE

```bash
$ npm start
```

## BE

```bash
$ npm run start:server
```

## SASS

To import `.sass` file add `import './filename.scss';` to your `js` file

## ESLint

Style Guide based on [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

Except few changes:

* indent: 4 spaces

## Unit tests

[Jest](https://facebook.github.io/jest/) is used for unit testing.

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

### Coverage

Coverage should be more than `80%`.
