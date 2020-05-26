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
const formSubmit = document.querySelector(".form__submit");

const state = {
  //режим :  редактикирование или создание
  mode: "add",
  // индекс элемента, который редактируем
  index: 0,
};

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const text = formInput.value;

  // если режим создание
  if (state.mode === "add") {
    // добавляем элемент в конец списка, т.к. выводим список снизу вверх через prepend
    todoList.push(text);
    // отображаем элемент в разметке
    renderTemplateItem(text);
  }

  // если редактирование
  if (state.mode === "update") {
    // обновлять список
    todoList[state.index] = text;
    // отображаем элемент в разметке
    renderTemplateItem(text);
  }
  // сбрасываем состояние
  state.mode = "add";
  formInput.value = "";
  formSubmit.value = "Добавить";
});

// добавление обработчиков на элемент задачи
// на кнопку редактировать и удалить
function addTemplateEvents(template) {
  const delButton = template.querySelector(".button_type_delete");

  delButton.addEventListener("click", (evt) => {
    const list_item = evt.target.closest(".list__item");
    const text = list_item.querySelector(".item__text").innerText;

    const index = todoList.indexOf(text);

    todoList.splice(index, 1);

    list_item.remove();
  });

  const editButton = template.querySelector(".button_type_edit");

  editButton.addEventListener("click", (evt) => {
    const list_item = evt.target.closest(".list__item");

    const text = list_item.querySelector(".item__text").innerText;

    formInput.value = text;

    formSubmit.value = "Сохранить";

    // переходим в режим редактирования
    state.mode = "update";
    state.index = todoList.indexOf(text);
  });
}

function renderTemplateItem(item) {
  const template = itemTemplate.cloneNode(true);

  template.querySelector(".item__text").innerText = item;
  // добавить обработчики
  addTemplateEvents(template);

  // по аналогии с submit формы
  if (state.mode === "add") {
    list.prepend(template);
  }
  if (state.mode === "update") {
    // махинация с индексом, потому что выводим список в обратном порядке
    const ruleIndex = todoList.length - (state.index + 1);
    // берем из списка текущий элемент
    const currentElement = list.children[ruleIndex];
    // заменяем его на новый шаблон
    currentElement.replaceWith(template);
  }
}

// вывести список на экран
function render() {
  // перебираем список и выводим каждый элемент на экран
  todoList.forEach(renderTemplateItem);
}

render();
