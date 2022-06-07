const express = require('express');
const router = require('./routes/index.js')

const app = express();

const {json, urlencoded} = express;
app.use(router)
app.use(json());
app.use(urlencoded({
    extended: false
}))

app.get('/ping', (req, res) => {
    res.send('pong');
});

module.exports = app;