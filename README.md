# [<span style="color: #15b881">Vue Hall Scheme View</span>](https://gitlab.rambler.ru/listim/vue-hall-scheme-view)
## Node.js version

<span style="color: #15b881">20.12.0</span>

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
<div id="selector_for_mounting"></div>
...
```

```javascript
// js
import { VueHallSchemeView } from '@listim/vue_hall_scheme_view'
import '@listim/vue_hall_scheme_view/dist/style.css'

// создание Vue приложения и монтирование в '#selector_for_mounting'
const myApp = new VueHallSchemeView('#selector_for_mounting')
```

**У схемы нет размеров. Она заполняет 100% ширины и высоты блока, в который встраивается.**

## [dev] Запуск и Демо

После запуска приложение будет доступно по ссылке http://localhost:8090
Для демо нажать кнопку **fetch places** чтобы прокинуть места в схему

#### - Запуск с Docker
##### Подготовка
**необходимо только при самом первом запуске*
**Все команды запускаются из корня проекта*

1. Сбилдить контейнер
```bash
docker compose up -d --build
```

2. Запустить контейнер

```bash
docker compose start
```

3. Установить node_modules
```bash
docker compose exec frontend sh -c 'yarn'
```

##### Запуск
1. Запустить контейнер (если ещё не запущен)
```bash
docker compose start
```

2. Запуск приложения в dev mode

Короткая команда
```bash
docker compose exec frontend sh -c 'yarn dev'
```

или перейти в контейнер и запустить в нём приложение
```bash
docker compose exec frontend sh

# в контейнере
yarn dev
```

#### - Запуск без Docker
1. установить Node.js 20.12.0 (с помощью nvm - ```nvm install 20.12.0; nvm use```)
2. yarn
3. yarn dev


## [dev] Добавление локального пакета в проект
в корне пакета - ```npm link```
в корне проекта, куда подключается пакет - ```npm link @listim/vue_hall_scheme_view```

***В случае запуска проекта и пакета в разных docker-compose это не сработает**

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

    // START: необязательные поля
    bg_color: '#a99498', // || ['#a99498', '#fefefe'] // [bg_color, bg_color_hover]
    border_color: '#00aaee', // || ['#a99498', '#fefefe'] // [border_color, border_color_hover]

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
    available: true,
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
- clearSelectedSeats() {{id: {seat}}} - очистить выделенные места
- on(str event, handler()) {void} - коллбэк на события, генерируемые методами класса
- setSelectionFilters({filter_name: value}) {void} - установить фильтры, по которым выбираются места, с которыми можно взаимодействовать (выделять)

```javascript
setSelectionFilters({
  // фильтр по атрибутам места
  attrs: {
    status: ['available', 'closed'],
    // если массив, проверяет на соответствие каждое значение
    // seat.status: 'available'
    // seat.status: 'closed'
    x: 25, // строка или число сравнивается напрямую
    sell_chanels: {
      is_widget: true,
    },
    // в объектах сранивается значение каждого ключа, указанного в фильтре
  }
})
```
- loaderOn()/loaderOff() {void} - включение/выключение лоадера


## Пользовательские действия на схеме
- Клик по месту -- выделение/снятие выделение
- ЛКМ + тащить -- выделить область мест (рамка-выделение)
- Ctrl/Command + ЛКМ + тащить у-- снять выделение с области мест
- Ctrl/Command + z -- отменить последнее действие с выделением мест
- Shift + ЛКМ - перемещение
- Scroll - масштабирование
