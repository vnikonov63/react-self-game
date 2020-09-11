const mongoose = require("mongoose");
const db = require("./db");
const Card = require("../models/card");

const entries = [
  {
    theme: "Столицы",
    questions: [
      {
        question: "Если Так Сяк, то Сяк?",
        price: 100,
        variants: ["Так", "Тут", "Спит"],
        correct: "Париж",
      },
      {
        question: "Столица Великобритании?",
        price: 200,
        variants: ["[Object object]", "[Object object]", "[Object object]"],
        correct: "[Object object]",
      },
      {
        question: "Столица США?",
        price: 300,
        variants: ["Лондон", "Вашингтон", "Париж"],
        correct: "Вашингтон",
      },
      {
        question: "Столица США?",
        price: 400,
        variants: ["Лондон", "Вашингтон", "Париж"],
        correct: "Вашингтон",
      },
      {
        question: "Столица США?",
        price: 500,
        variants: ["Лондон", "Вашингтон", "Париж"],
        correct: "Вашингтон",
      },
    ],
  },
  {
    theme: "Столицы",
    questions: [
      {
        question: "Если Так Сяк, то Сяк1?",
        price: 100,
        variants: ["Так", "Тут", "Спит"],
        correct: "Париж",
      },
      {
        question: "Столица Великобритании11111?",
        price: 200,
        variants: ["[Object object]", "[Object object]", "[Object object]"],
        correct: "[Object object]",
      },
      {
        question: "Столица США?1111",
        price: 300,
        variants: ["Лондон", "Вашингтон", "Париж"],
        correct: "Вашингтон",
      },
      {
        question: "Столица США?111",
        price: 400,
        variants: ["Лондон", "Вашингтон", "Париж"],
        correct: "Вашингтон",
      },
      {
        question: "Столица США?11",
        price: 500,
        variants: ["Лондон", "Вашингтон", "Париж"],
        correct: "Вашингтон",
      },
    ],
  },
];

Card.insertMany(entries).then(() => {
  mongoose.connection.close();
});
