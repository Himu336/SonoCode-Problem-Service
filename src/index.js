const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server-config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/api', apiRouter);

app.use(errorHandler);

app.get('/ping', (req, res) => {
    return res.json({
        message: 'Problem service is live'
    })
});

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});
