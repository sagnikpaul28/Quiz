const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;

mongoose.connect('mongodb+srv://sagnikpaul28:sagnikpaul28@cluster.7as9x.mongodb.net/quiz?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to DB");
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/topics', (req, res) => {
    Topics.find({}, function(err, docs) {
        res.send(docs);
    })
});

app.get('/questions/:topic', (req, res) => {
    Questions.find({ topic: req.params.topic}, function(err, docs) {
        docs.sort(() => Math.random() - Math.random()).slice(0, 5);
        docs = docs.map(item => {
            return {
                question: item.question,
                options: item.options
            }
        });
        res.send(docs);
    })
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});

const topicSchema = new mongoose.Schema({
    name: String,
    description: String,
    bgImg: String,
    primaryImg: String,
    video: String
});

const Topics = mongoose.model('topics', topicSchema);

const questionsSchema = new mongoose.Schema({
    topic: String,
    question: String,
    options: [{
        id: Number,
        optionName: String
    }],
    correctAnswer: Number
});

const Questions = mongoose.model('questions', questionsSchema);