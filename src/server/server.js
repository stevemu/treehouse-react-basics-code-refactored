import path from 'path';
import express from 'express';
import fallback from 'express-history-api-fallback'

var bodyParser = require('body-parser');

var app = express();
var server;

const PATH_STYLES = path.resolve(__dirname, '../client/styles');
const PATH_DIST = path.resolve(__dirname, '../../dist');

app.use('/styles', express.static(PATH_STYLES));
app.use(express.static(PATH_DIST));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});
app.use(fallback(path.resolve(__dirname, '../client/index.html'))); // when requested route does not exist here in express app, return this file; for react.js route when using history.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});
