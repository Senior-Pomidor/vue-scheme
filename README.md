# [<span style="color: #15b881">Hall Scheme View</span>](https://gitlab.rambler.ru/listim/hall-schema-view)
## Node.js version

<span style="color: #15b881">16.20.0</span>

### Package manager - <span style="color: #15b881">Yarn</span>

## Vue 3 + Vite

## Demo dev

1. yarn
2. yarn dev
3. открыть http://localhost:8088
4. нажать кнопку **fetch places** чтобы прокинуть места в схему

## Встраивание схемы на внешнюю страницу
(пример внутри в [index.html](/index.html))

1. Создать на странице блок с id="vue_hall_scheme_app"
```html
<div id="vue_hall_scheme_app"></div>
```

2. Подключить скрипты схемы в html
- DEV with HMR
    ```html
    <script type="module" src="http://localhost:8088/@vite/client"></script>
    <script type="module" src="http://localhost:8088/src/main.js"></script>
    ```
- BUILD
    ```html
    <link rel="stylesheet" href="<PATH_TO_BUILD_DIR>/style.css">
    <script src="<PATH_TO_BUILD_DIR>/vue_hall_scheme_app.umd.js"></script>
    ```
    <PATH_TO_BUILD_DIR> - указан в vite.config.js
По дефолту dist

3. Вызвать метод **window.hallSchemeApp.setSchemeSeatsToApp(seats)** чтобы прокинуть места на схему

**У схемы нет размеров. Она заполняет 100% ширины и высоты блока, в который встраивается.**




## Взаимодействие со схемой
Для взаимодействия со схемой используется класс **window.hallSchemeApp** <br>
Его методы генерят одноимённые события на элементе, куда встраивается схема. <br>
Передача данных осуществляется путём вызова методов и подписки на события. <br>

Описание ниже.

Схема принимает и возвращет данные в одинаковом формате.

#### Формат данных для схемы:
```javascript
// seats
{
  28788409: {
    // START: Обязательные поля
    id: 28788409,
    coord_x: 1338,
    coord_y: 288,
    // END: Обязательные поля


    // START: поля стилизации
    styles: {
      width: 25,
      height: 25,
      bg_color: '#a99498',
      border_color: 'red',
      rx: 3,
      ry: 3,
    }
    // END: поля стилизации


    // START: необязательные параметры
    additional: {
      row: '2',
      seat: '26',
      tooltip: {
        html: `
          <div class="place-tooltip">
            tooltip_content
          </div>
        `,
      },
      sector: {
        id: 318746,
        name: 'Балкон 3-го яруса',
        is_simple: false,
      },
    }
    // END: необязательные параметры


    // START: любые дополнительные поля
    location_place_id: 28788409,
    event_place_id: 12345621,
    sector: {
      id: 318746,
      name: 'Балкон 3-го яруса',
      is_simple: false,
    },
    opened: true, // место оценено
    reserve_status: 'reserved_my', // 'closed' | 'available' | 'reserved'
    price: 100,
    // END: любые дополнительные поля
  },
  // ...
}
```


## window.hallSchemeApp
Поля
- events (enum) - названия событий, генерируемых методами класса. Совпадают с названиями методов.

Методы внешние
- getRootElement() {Element} - элемент, в который встроена схема и на котором генерируются события
- setSchemeSeatsToApp({id: {seat}}) {void} - установить места на схеме
- getSelectedSeats() {{id: {seat}}} - получить выделенные места
- on(str event, handler()) {void} - коллбэк на события, генерируемые методами класса
- setSelectionFilters({filter_name: value}) {void} - установить фильтры, по которым выбираются места, с которыми можно взаимодействовать (выделять)
- loaderOn()/loaderOff() {void} - включение/выключение лоадера


## Пользовательские действия на схеме
- Клик по месту -- выделение/снятие выделение
- ЛКМ + тащить -- выделить область мест (рамка-выделение)
- Ctrl/Command + ЛКМ + тащить у-- снять выделение с области мест
- Ctrl/Command + z -- отменить последнее действие с выделением мест
- Shift + ЛКМ - перемещение
- Scroll - масштабирование
