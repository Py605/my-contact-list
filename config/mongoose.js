const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contacts_list');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Having some issues while connecting to db...'));

db.once('open',function(){
  console.log('finally, it Worked, it Worked!!')
})