import "./index.css";
import Card from '../components/Card.js';
import "../images/Edit.png";
import "../images/Duplicate.png";
import "../images/Delete.png";

const items = [
  "Сделать проектную работу",
  "Полить цветы",
  "Пройти туториал по Реакту",
  "Сделать фронт для своего проекта",
  "Погулять с собакой",
  "Разобраться в замыканиях",
  "Решить задачу на Codewars",
];

const list = document.querySelector(".list");

// вывести список на экран
function render() {
  // перебираем список и выводим каждый элемент на экран
  items.forEach((item) => {
    const card = new Card(item, ".item_template");
    card.render(list);
  });
}

render();
