const mongoose = require("mongoose");
const db = require("./db");
const Card = require("../models/card");

const entries = [
  {
    theme: "Интересное",
    questions: [
      {
        question: "Если Так Сяк, то Сяк?",
        price: 100,
        variants: ["Так", "Тут", "Спит"],
        correct: "Так",
      },
      {
        question: "Столица Великобритании?",
        price: 200,
        variants: ["[Object object]", "[Object object]", "[Object object]"],
        correct: "[Object object]",
      },
      {
        question: "Мой самый любимый метод массива",
        price: 300,
        variants: ["Map", "Reduce", "mp3"],
        correct: "mp3",
      },
      {
        question: "Что круче HBS или React",
        price: 400,
        variants: ["HBS", "React", "COBOL"],
        correct: "COBOL",
      },
      {
        question: "Столица Хиндустана",
        price: 500,
        variants: ["Самара", "Самара", "Москва"],
        correct: "Самара",
      },
    ],
  },
  {
    theme: "Legacy",
    questions: [
      {
        question: "Какую электронную сигарету курит Гриша",
        price: 100,
        variants: ["JULL", "LOGIC", "HQD"],
        correct: "JULL",
      },
      {
        question: "В какую компанию устроился Тимур",
        price: 200,
        variants: ["Wildberries", "Google", "ЧОП МИША"],
        correct: "Wildberries",
      },
      {
        question: "Гарри Поттер",
        price: 300,
        variants: ["Такое знать надо", "Такое знать надо", "Такое знать надо"],
        correct: "Хагрид",
      },
      {
        question: "В каком году Женя завел себе github account",
        price: 400,
        variants: ["2009", "2010", "2015"],
        correct: "2010",
      },
      {
        question: "Высота горы, которую недавно покорил Гоша",
        price: 500,
        variants: ["4738", "6379", "5642"],
        correct: "5642",
      },
    ],
  },
  {
    theme: "НЕ ТРОГАТЬ",
    questions: [
      {
        question: "Какую электронную сигарету курит Гриша",
        price: 100,
        variants: ["JULL", "LOGIC", "HQD"],
        correct: "JULL",
      },
      {
        question: "В какую компанию устроился Тимур",
        price: 200,
        variants: ["Wildberries", "Google", "ЧОП МИША"],
        correct: "Wildberries",
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
  {
    theme: "НЕ ТРОГАТЬ",
    questions: [
      {
        question: "Какую электронную сигарету курит Гриша",
        price: 100,
        variants: ["JULL", "LOGIC", "HQD"],
        correct: "JULL",
      },
      {
        question: "В какую компанию устроился Тимур",
        price: 200,
        variants: ["Wildberries", "Google", "ЧОП МИША"],
        correct: "Wildberries",
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
  {
    theme: "НЕ ТРОГАТЬ",
    questions: [
      {
        question: "Какую электронную сигарету курит Гриша",
        price: 100,
        variants: ["JULL", "LOGIC", "HQD"],
        correct: "JULL",
      },
      {
        question: "В какую компанию устроился Тимур",
        price: 200,
        variants: ["Wildberries", "Google", "ЧОП МИША"],
        correct: "Wildberries",
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
