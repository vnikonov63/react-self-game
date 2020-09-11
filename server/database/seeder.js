const mongoose = require("mongoose");
const db = require('./db')
const Card = require('../models/card');

const entries = [
  {
    theme: 'Столицы',
    questions: [
      {
        question: 'Столица Франции?',
        variants: ['Москва', 'Варшава', 'Париж'],
        correct: 'Париж',
      },
      {
        question: 'Столица Великобритании?',
        variants: ['Лондон', 'Варшава', 'Париж'],
        correct: 'Лондон',
      },
      {
        question: 'Столица США?',
        variants: ['Лондон', 'Вашингтон', 'Париж'],
        correct: 'Вашингтон',
      }
    ]
  }
];

Card.insertMany(entries).then(() => {
  mongoose.connection.close();
});
