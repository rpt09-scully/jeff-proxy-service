const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// log every request to the console
// https://www.npmjs.com/package/morgan#dev
app.use(morgan('dev'));

// Per requirements: Set up express to serve a static app
// via a differentiating port
// http://localhost:3000
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
