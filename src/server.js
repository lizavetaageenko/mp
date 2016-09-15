const express = require('express');
const session = require('express-session');
const app = express();
const port = 3332;

app.use(session({
    secret: `don't look, this is a secret`,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: false
    }
}));

function createNewGame(userSessionId) {
    return {
        id: 1,
        status: 'new',
        host: userSessionId,
        players: [userSessionId],
        location: null,
        spy: null,
        resolution: null
    };
}

app.get('/', function (req, res) {
    const session = req.session;
    console.log('New request:');
    console.log(session.id);
    res.send(createNewGame(session.id));
});

app.listen(port, function () {
    console.log(`API server is listening on port ${port}!`);
});