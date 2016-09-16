const express = require('express');
const session = require('express-session');
const router = require('./router.js');
const socket = require('./socket.js');
const port = 3332;

const app = express();
const server = app.listen(port, function () {
    console.log(`API server is listening on port ${port}!`);
});


app.set('trust proxy', 1);
app.use(session({
    secret: `don't look, this is a secret`,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        secure: false
    }
}));

router.addRoutes(app);
socket.init(server);

