const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const errorhandler = require('errorhandler');

const apiRouter = require('./api/api.js');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', apiRouter);

app.use(errorhandler());

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})

module.exports = app;