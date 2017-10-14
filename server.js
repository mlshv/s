/* eslint-disable no-underscore-dangle */
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Note = require('./model/notes');

const app = express();
const apiRouter = express.Router();
const port = 3001;

mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost:27017/s', {
    useMongoClient: true,
  })
  .then(
    () => {
      console.log('MongoDB connection opened');
    },
    () => {
      console.log('Unable to connect to MongoDB! Run "service mongod start"');
      process.exit(1);
    },
  );

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

app.use(express.static(path.resolve(__dirname, 'build')));

apiRouter.get('/', (req, res) => {
  res.json({ message: 'API Initialized!' });
});

apiRouter
  .route('/notes')
  .get((req, res) => {
    Note.find({})
      .sort('-updatedAt')
      .exec((err, notes) => {
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
      res.json(note);
    });
  })
  .delete((req, res) => {
    Note.findById(req.query.id)
      .remove()
      .exec()
      .then((result) => {
        res.json({ success: result.result.n });
      });
  });

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`api running on port ${port}`);
});
