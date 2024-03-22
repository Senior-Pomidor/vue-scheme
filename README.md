# [<span style="color: #15b881">Vue Hall Scheme View</span>](https://gitlab.rambler.ru/listim/vue-hall-scheme-view)
## Node.js version

<span style="color: #15b881">16.20.0</span>

### Package manager - <span style="color: #15b881">Yarn</span>

## Vue 3 + Vite

## Добавление пакета в проект
```
npm set "@listim:registry=https://art.rambler.ru/api/npm/listim-npm/"
npm install @listim/vue_hall_scheme_view
```

## Использование пакета в проекте
```html
<!-- html -->
...
<div id="selector_name"></div>
...
```

```javascript
// js
import { VueHallSchemeView } from '@listim/vue_hall_scheme_view'

const myApp = new VueHallSchemeView({
  el: '#selector_name'
})

myApp.create() // создание Vue приложения
  .mount() // монтирование в '#selector_name'
```

**У схемы нет размеров. Она заполняет 100% ширины и высоты блока, в который встраивается.**

## [dev] Demo
1. yarn
2. yarn dev
3. открыть http://localhost:8088
4. нажать кнопку **fetch places** чтобы прокинуть места в схему

## [dev] Добавление локального пакета в проект
в корне пакета - ```npm link```
в корне проекта, куда подключается пакет - ```npm link @listim/vue_hall_scheme_view```

## [dev] Запуск в режиме отслеживания изменений
```npm run watch```







## Взаимодействие со схемой
Для взаимодействия со схемой используется инстанс **VueHallSchemeApp** <br>
Его методы генерят одноимённые события на элементе, куда встраивается схема. <br>
Передача данных осуществляется путём вызова методов и подписки на события. <br>

Описание ниже.

**Схема принимает и возвращет данные в одинаковом формате.**

#### Формат данных для схемы:
```javascript
// seats
{
  28788409: {
    // START: Обязательные поля
    id: 28788409,
    x: 1338,
    y: 288,
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
    // END: необязательные параметры


    // Люьые дополнительные поля
    location_place_id: 28788409,
    eplace_id: 12345621,

    opened: true, // место оценено
    reserve_status: 'by_user' // 'closed' | 'available' | 'reserved'
    price: 100,
  },
  // ...
}
```


## API
#### Поля
- events (enum) - названия событий, генерируемых методами класса. Совпадают с названиями методов.

#### Методы внешние
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
