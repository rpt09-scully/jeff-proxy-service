const express = require('express');
const app = express();
const morgan = require('morgan');
const hbe = require('express-handlebars');

// Port 80 when deployed, 3000 when local
const port = (process.env.NODE_ENV === 'production') ? 8081 : 3000;
// log every request to the console
// https://www.npmjs.com/package/morgan#dev
app.use(morgan('dev'));
// template engine for express
// using with public/index.html
app.engine('html', hbe());
app.set('view engine', 'html');
app.set('views', __dirname + '/public');

app.use('/', express.static(__dirname + '/public/'));

app.get('/:trailId(\\d+$)*?', (req, res) => {
  res.status(200).render('index', {env_prod: (process.env.NODE_ENV === 'production')});
});

app.listen(port, () => {
  console.log(`Listening on: ${port}`);
});
