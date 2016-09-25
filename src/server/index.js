const express = require('express');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
const socket = require('./socket');
const db = require('./db');
const gameRouter = require('./game/game.router');

const port = 3332;
const app = express();
const dbConnection = db.init();

const session = expressSession({
    secret: 'don\'t look, this is a secret',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        mongooseConnection: dbConnection
    }),
    cookie: {
        httpOnly: false,
        secure: false
    }
});

app.set('trust proxy', 1);
app.use(session);

const server = app.listen(port, () => {
    console.log(`API server is listening on port ${port}!`);
});

socket.init(server, session);
gameRouter.init(app);
