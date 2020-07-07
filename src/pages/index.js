import "./index.css";
import "../images/Edit.png";
import "../images/Duplicate.png";
import "../images/Delete.png";

import Card from '../components/Card.js';
import List from '../components/list.js';
import Form from '../components/Form.js';

const items = [
  "Сделать проектную работу",
  "Полить цветы",
  "Пройти туториал по Реакту",
  "Сделать фронт для своего проекта",
  "Погулять с собакой",
  "Разобраться в замыканиях",
  "Решить задачу на Codewars1",
];

const todo = document.querySelector(".todo");

const createItem = (item) => new Card(item, ".item_template");
const createForm = (addItem) => new Form(".form_template", addItem);

const list = new List(items, ".list_template", todo, createItem, createForm);
list.render();



