const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/27017', { useNewUrlParser: 'true' });

const db = mongoose.connection;

db.on(
  'error',
  console.error.bind(console, 'Having some issues while connecting to db...')
);

db.once('open', function () {
  console.log('finally, it Worked, it Worked!!');
});
