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

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const text = formInput.value;

  todoList.unshift(text);
  // render(); можно просто всё перерисовать
  renderTemplateItem(text);

  formInput.value = "";
});

function renderTemplateItem(item) {
  const template = itemTemplate.cloneNode(true);

  template.querySelector(".item__text").innerText = item;

  const delButton = template.querySelector(".button_type_delete");

  delButton.addEventListener('click', (evt) => {
    const list_item = evt.target.closest('.list__item');

    const index = todoList.indexOf(item);

    todoList.splice(index, 1);
    
    list_item.remove();
  })


  list.prepend(template);
}

function render() {
  todoList.forEach(renderTemplateItem);
}

render();
