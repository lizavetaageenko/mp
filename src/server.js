const express = require('express');
const app = express();
const port = 3332;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log(`API server is listening on port ${port}!`);
});