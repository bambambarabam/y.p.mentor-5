const todoList = [
  "Сделать проектную работу",
  "Полить цветы",
  "Пройти туториал по Реакту",
  "Сделать фронт для своего проекта",
  "Погулять с собакой",
  "Разобраться в замыканиях",
  "Решить задачу на Codewars",
];

const itemTemplate = document.querySelector(".item_template").content;
const list = document.querySelector(".list");
const form = document.querySelector(".form");
const formInput = document.querySelector(".form__input");

function renderItemElement(item) {
  const li = document.createElement('li');
  li.classList.add('list__item');
  
  const span = document.createElement('span');
  span.innerText = item;
  span.classList.add('item__text');
  li.append(span);
  
  const btnEdit = document.createElement('button');
  btnEdit.setAttribute('type', 'button');
  btnEdit.classList.add('button', 'button_type_edit');
  li.append(btnEdit);
  
  const btnDupl = document.createElement('button');
  btnDupl.setAttribute('type', 'button');
  btnDupl.classList.add('button', 'button_type_duplicate');
  li.append(btnDupl);
  
  const btnDel = document.createElement('button');
  btnDel.setAttribute('type', 'button');
  btnDel.classList.add('button', 'button_type_delete');
  li.append(btnDel);
  
  list.append(li);
}

function renderItem(item) {
  list.insertAdjacentHTML('beforeend', 
  `<li class="list__item">
  <span class="item__text">${item}</span>
  <button type="button" class="button button_type_edit" src="images/Edit.png" title="Редактировать"></button>
  <button type="button" class="button button_type_duplicate" src="images/Duplicate.png" title="Копировать"></button>
  <button type="button" class="button button_type_delete" src="images/Delete.png" title="Удалить"></button>
  </li>`);
}

function renderTemplateItem(item) {

  const template = itemTemplate.cloneNode(true);

  template.querySelector('.item__text').innerText = item;

  list.append(template);
}


function render() {
  todoList.forEach(renderTemplateItem);
}

render();


