import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import open from 'open';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    noInfo: config.noInfo,
    publicPath: config.output.publicPath
}));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, err => {
    if (err) {
        return console.log(err);
    }
    open(`http://localhost:${port}`);
});