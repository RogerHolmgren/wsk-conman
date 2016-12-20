import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
const port = process.env.PORT || 80;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'), {})
});


app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

app.get('/users', (req, res) => {
  res.json([
    {"id": 1,"firstName":"Bob"},
    {"id": 2,"firstName":"Tammy"},
    {"id": 3,"firstName":"Tina"}
  ])
})

