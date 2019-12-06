const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./Routes.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', express.static(path.resolve(__dirname, '..', 'public')));
app.use(morgan('dev'));
app.set('port', 3000);

app.use('/order', router);

app.listen(app.get('port'), () => {
  console.log('Now listening to port', app.get('port'));
});
