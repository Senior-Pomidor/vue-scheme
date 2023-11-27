# [<span style="color: #15b881">Hall Scheme</span>](https://senior-pomidor.github.io/vue_scheme_prototype/)
## Node.js version

<span style="color: orange">16.17.0</span>

### Package manager - <span style="color: orange">Yarn</span>

## Vue 3 + Vite

## Встраивание схемы

Блок для встраивания - **#vue_hall_scheme_app**

Для взаимодействия со схемой используется класс **window.hallSchemeApp**

### window.hallSchemeApp API
Поля
- events (enum) - названия событий, генерируемых методами класса

Методы
- getRootElement() {Element} - элемент, в который встроена схема и на котором генерируются события
- setSchemeSeatsToApp(array[obj {id: {seat}}]) {void} - установить места на схеме
- getSelectedSeatsIds() {array[str id]} - получить массив id выделенных мест
- on(str event, handler()) {void} - коллбэк на события, генерируемые методами класса
