const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let contactList = [
  {
    name: 'Priyanshu',
    phone: '123456789',
  },
  {
    name: 'py',
    phone: '0987654321',
  },
  {
    name: 'py605',
    phone: '9343634936',
  },
];

app.get('/', function (req, res) {
  Contact.find({}, function (err, contacts) {
    if (err) {
      console.log('error in fetching data from db.');
      return;
    }

    return res.render('home', {
      title: 'My Contact List',
      contactList: contacts,
    });
  });
});

app.post('/create-contact', function (req, res) {
  // contactList.push(req.body);
  // res.redirect('/');
  Contact.create(
    {
      name: req.body.name,
      phone: req.body.phone,
    },
    function (err, newContact) {
      if (err) {
        console.log('error in creating this contact..');
        return;
      }
      console.log('******', newContact);
      return res.redirect('back');
    }
  );
});

app.get('/delete-contact/:phone', function (req, res) {
  let phone = req.params.phone;

  Contact.deleteOne({ phone: phone }, function (err) {
    if (err) {
      console.log('error in deleting an object from db');
      return;
    }
    return res.redirect('/');
  });
});

app.listen('4000', function () {
  console.log('Server started at port 4000 ');
});
