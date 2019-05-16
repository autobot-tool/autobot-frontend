/**
 * Server to Autobot app
 */

// const path = require('path');
const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/autobot-frontend'));

// Send all requests to index.html
app.all('/*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/dist/autobot-frontend/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 8000);
