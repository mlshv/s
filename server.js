const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Note = require('./model/notes');

const app = express();
const router = express.Router();
const port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://localhost:27017/s', {
  useMongoClient: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
  );
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', (req, res) => {
  res.json({ message: 'API Initialized!' });
});

router
  .route('/notes')
  .get((req, res) => {
    Note.find({}, (err, notes) => {
      if (err) res.send(err);
      res.json(notes);
    });
  })
  .post((req, res) => {
    const note = new Note();
    note.title = req.body.title;
    note.text = req.body.text;
    note.save((err) => {
      if (err) res.send(err);
      res.json({ message: 'Note successfully added!' });
    });
  });

app.use('/api', router);

app.listen(port, () => {
  console.log(`api running on port ${port}`);
});
