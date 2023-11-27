// Места для SVG схемы зала
// Взяты со схемы с виджета

// const seats = {
//   28788409: {
//     id: 28788409,
//     row: '2',
//     seat: '26',
//     coord_x: 1338,
//     coord_y: 288,
//     location_place_id: 28788409,
//     eplace_id: 12345621,
//     sector: {
//       id: 318746,
//       name: 'Балкон 3-го яруса',
//       is_simple: false,
//     },
//     opened: true, // доступно для резервации в принципе
//     reserve_status: 'by_user' // 'available' | 'reserved'
//     pricblack0,
//     status: 'prodanoCherezKred',
//     bg_color: '#a99498',
//     border_color: 'red',
//     tooltip: {
//       html: `
//         <div class="place-tooltip">
//           <span>
//             <b>id:</b> 995542
//           </span>
//           <span>
//             <b>Сектор:</b> Основной
//           </span>

//           <div class="place-tooltip__bottom">
//               <a class="place-tooltip__btn">Посмотреть инфо</a>
//               <a class="place-tooltip__btn">История изменений</a>
//           </div>
//         </div>
//       `,
//     },
//   },
//   // ...
// }

const MAP_PLACES = {
  1: {
    id: 1,
    location_place_id: 1,
    event_place_id: 3211,
    row: '1',
    seat: '1',
    coord_x: 25,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    sell_сhannels: {
      is_api: true,
      widget: true,
      cashbox: true,
    },
    price: 0,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  1671: {
    id: 1671,
    location_place_id: 1671,
    event_place_id: 3211671,
    row: '6',
    seat: '20',
    coord_x: 350,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    sell_сhannels: {
      is_api: true,
      widget: true,
      cashbox: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  1699: {
    id: 1699,
    location_place_id: 1699,
    event_place_id: 3211699,
    row: '7',
    seat: '23',
    coord_x: 425,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    sell_сhannels: {
      is_api: true,
      widget: false,
      cashbox: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: true,
    reserve_status: 'reserved',
    bg_color: 'black',
    border_color: 'gred',
  },
  1698: {
    id: 1698,
    location_place_id: 1698,
    event_place_id: 3211698,
    row: '6',
    seat: '23',
    coord_x: 425,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    sell_сhannels: {
      is_api: false,
      widget: false,
      cashbox: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1692: {
    id: 1692,
    location_place_id: 1692,
    event_place_id: 3211692,
    row: '9',
    seat: '22',
    coord_x: 400,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1691: {
    id: 1691,
    location_place_id: 1691,
    event_place_id: 3211691,
    row: '8',
    seat: '22',
    coord_x: 400,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1690: {
    id: 1690,
    location_place_id: 1690,
    event_place_id: 3211690,
    row: '7',
    seat: '22',
    coord_x: 400,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1689: {
    id: 1689,
    location_place_id: 1689,
    event_place_id: 3211689,
    row: '6',
    seat: '22',
    coord_x: 400,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1683: {
    id: 1683,
    location_place_id: 1683,
    event_place_id: 3211683,
    row: '9',
    seat: '21',
    coord_x: 375,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1682: {
    id: 1682,
    location_place_id: 1682,
    event_place_id: 3211682,
    row: '8',
    seat: '21',
    coord_x: 375,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1681: {
    id: 1681,
    location_place_id: 1681,
    event_place_id: 3211681,
    row: '7',
    seat: '21',
    coord_x: 375,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1680: {
    id: 1680,
    location_place_id: 1680,
    event_place_id: 3211680,
    row: '6',
    seat: '21',
    coord_x: 375,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1674: {
    id: 1674,
    location_place_id: 1674,
    event_place_id: 3211674,
    row: '9',
    seat: '20',
    coord_x: 350,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1673: {
    id: 1673,
    location_place_id: 1673,
    event_place_id: 3211673,
    row: '8',
    seat: '20',
    coord_x: 350,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1672: {
    id: 1672,
    location_place_id: 1672,
    event_place_id: 3211672,
    row: '7',
    seat: '20',
    coord_x: 350,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1645: {
    id: 1645,
    location_place_id: 1645,
    event_place_id: 3211645,
    row: '10',
    seat: '11',
    coord_x: 575,
    coord_y: 250,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1701: {
    id: 1701,
    location_place_id: 1701,
    event_place_id: 3211701,
    row: '9',
    seat: '23',
    coord_x: 425,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1644: {
    id: 1644,
    location_place_id: 1644,
    event_place_id: 3211644,
    row: '9',
    seat: '11',
    coord_x: 575,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1643: {
    id: 1643,
    location_place_id: 1643,
    event_place_id: 3211643,
    row: '8',
    seat: '11',
    coord_x: 575,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1642: {
    id: 1642,
    location_place_id: 1642,
    event_place_id: 3211642,
    row: '7',
    seat: '11',
    coord_x: 575,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  2: {
    id: 2,
    location_place_id: 2,
    event_place_id: 3212,
    row: '2',
    seat: '1',
    coord_x: 50,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1640: {
    id: 1640,
    location_place_id: 1640,
    event_place_id: 3211640,
    row: '5',
    seat: '11',
    coord_x: 575,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1639: {
    id: 1639,
    location_place_id: 1639,
    event_place_id: 3211639,
    row: '4',
    seat: '11',
    coord_x: 575,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1638: {
    id: 1638,
    location_place_id: 1638,
    event_place_id: 3211638,
    row: '3',
    seat: '11',
    coord_x: 575,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  100: {
    id: 100,
    location_place_id: 100,
    event_place_id: 321100,
    row: '10',
    seat: '10',
    coord_x: 250,
    coord_y: 250,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  99: {
    id: 99,
    location_place_id: 99,
    event_place_id: 32199,
    row: '9',
    seat: '10',
    coord_x: 225,
    coord_y: 250,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  98: {
    id: 98,
    location_place_id: 98,
    event_place_id: 32198,
    row: '8',
    seat: '10',
    coord_x: 200,
    coord_y: 250,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  92: {
    id: 92,
    location_place_id: 92,
    event_place_id: 32192,
    row: '2',
    seat: '10',
    coord_x: 50,
    coord_y: 250,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  70: {
    id: 70,
    location_place_id: 70,
    event_place_id: 32170,
    row: '10',
    seat: '7',
    coord_x: 250,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  69: {
    id: 69,
    location_place_id: 69,
    event_place_id: 32169,
    row: '9',
    seat: '7',
    coord_x: 225,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1700: {
    id: 1700,
    location_place_id: 1700,
    event_place_id: 3211700,
    row: '8',
    seat: '23',
    coord_x: 425,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1707: {
    id: 1707,
    location_place_id: 1707,
    event_place_id: 3211707,
    row: '6',
    seat: '24',
    coord_x: 450,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  67: {
    id: 67,
    location_place_id: 67,
    event_place_id: 32167,
    row: '7',
    seat: '7',
    coord_x: 175,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1728: {
    id: 1728,
    location_place_id: 1728,
    event_place_id: 3211728,
    row: '9',
    seat: '26',
    coord_x: 500,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1745: {
    id: 1745,
    location_place_id: 1745,
    event_place_id: 3211745,
    row: '8',
    seat: '28',
    coord_x: 550,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1744: {
    id: 1744,
    location_place_id: 1744,
    event_place_id: 3211744,
    row: '7',
    seat: '28',
    coord_x: 550,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1743: {
    id: 1743,
    location_place_id: 1743,
    event_place_id: 3211743,
    row: '6',
    seat: '28',
    coord_x: 550,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1742: {
    id: 1742,
    location_place_id: 1742,
    event_place_id: 3211742,
    row: '5',
    seat: '28',
    coord_x: 550,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1741: {
    id: 1741,
    location_place_id: 1741,
    event_place_id: 3211741,
    row: '4',
    seat: '28',
    coord_x: 550,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1740: {
    id: 1740,
    location_place_id: 1740,
    event_place_id: 3211740,
    row: '3',
    seat: '28',
    coord_x: 550,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1737: {
    id: 1737,
    location_place_id: 1737,
    event_place_id: 3211737,
    row: '9',
    seat: '27',
    coord_x: 525,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1736: {
    id: 1736,
    location_place_id: 1736,
    event_place_id: 3211736,
    row: '8',
    seat: '27',
    coord_x: 525,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1735: {
    id: 1735,
    location_place_id: 1735,
    event_place_id: 3211735,
    row: '7',
    seat: '27',
    coord_x: 525,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1734: {
    id: 1734,
    location_place_id: 1734,
    event_place_id: 3211734,
    row: '6',
    seat: '27',
    coord_x: 525,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1733: {
    id: 1733,
    location_place_id: 1733,
    event_place_id: 3211733,
    row: '5',
    seat: '27',
    coord_x: 525,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1732: {
    id: 1732,
    location_place_id: 1732,
    event_place_id: 3211732,
    row: '4',
    seat: '27',
    coord_x: 525,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1731: {
    id: 1731,
    location_place_id: 1731,
    event_place_id: 3211731,
    row: '3',
    seat: '27',
    coord_x: 525,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1727: {
    id: 1727,
    location_place_id: 1727,
    event_place_id: 3211727,
    row: '8',
    seat: '26',
    coord_x: 500,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1708: {
    id: 1708,
    location_place_id: 1708,
    event_place_id: 3211708,
    row: '7',
    seat: '24',
    coord_x: 450,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1726: {
    id: 1726,
    location_place_id: 1726,
    event_place_id: 3211726,
    row: '7',
    seat: '26',
    coord_x: 500,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1725: {
    id: 1725,
    location_place_id: 1725,
    event_place_id: 3211725,
    row: '6',
    seat: '26',
    coord_x: 500,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1724: {
    id: 1724,
    location_place_id: 1724,
    event_place_id: 3211724,
    row: '5',
    seat: '26',
    coord_x: 500,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1723: {
    id: 1723,
    location_place_id: 1723,
    event_place_id: 3211723,
    row: '4',
    seat: '26',
    coord_x: 500,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1722: {
    id: 1722,
    location_place_id: 1722,
    event_place_id: 3211722,
    row: '3',
    seat: '26',
    coord_x: 500,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1719: {
    id: 1719,
    location_place_id: 1719,
    event_place_id: 3211719,
    row: '9',
    seat: '25',
    coord_x: 475,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1718: {
    id: 1718,
    location_place_id: 1718,
    event_place_id: 3211718,
    row: '8',
    seat: '25',
    coord_x: 475,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1717: {
    id: 1717,
    location_place_id: 1717,
    event_place_id: 3211717,
    row: '7',
    seat: '25',
    coord_x: 475,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1716: {
    id: 1716,
    location_place_id: 1716,
    event_place_id: 3211716,
    row: '6',
    seat: '25',
    coord_x: 475,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1715: {
    id: 1715,
    location_place_id: 1715,
    event_place_id: 3211715,
    row: '5',
    seat: '25',
    coord_x: 475,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1714: {
    id: 1714,
    location_place_id: 1714,
    event_place_id: 3211714,
    row: '4',
    seat: '25',
    coord_x: 475,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1713: {
    id: 1713,
    location_place_id: 1713,
    event_place_id: 3211713,
    row: '3',
    seat: '25',
    coord_x: 475,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1710: {
    id: 1710,
    location_place_id: 1710,
    event_place_id: 3211710,
    row: '9',
    seat: '24',
    coord_x: 450,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1709: {
    id: 1709,
    location_place_id: 1709,
    event_place_id: 3211709,
    row: '8',
    seat: '24',
    coord_x: 450,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  68: {
    id: 68,
    location_place_id: 68,
    event_place_id: 32168,
    row: '8',
    seat: '7',
    coord_x: 200,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1641: {
    id: 1641,
    location_place_id: 1641,
    event_place_id: 3211641,
    row: '6',
    seat: '11',
    coord_x: 575,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  66: {
    id: 66,
    location_place_id: 66,
    event_place_id: 32166,
    row: '6',
    seat: '7',
    coord_x: 150,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  52: {
    id: 52,
    location_place_id: 52,
    event_place_id: 32152,
    row: '2',
    seat: '6',
    coord_x: 50,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  59: {
    id: 59,
    location_place_id: 59,
    event_place_id: 32159,
    row: '9',
    seat: '6',
    coord_x: 225,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  58: {
    id: 58,
    location_place_id: 58,
    event_place_id: 32158,
    row: '8',
    seat: '6',
    coord_x: 200,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  57: {
    id: 57,
    location_place_id: 57,
    event_place_id: 32157,
    row: '7',
    seat: '6',
    coord_x: 175,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  56: {
    id: 56,
    location_place_id: 56,
    event_place_id: 32156,
    row: '6',
    seat: '6',
    coord_x: 150,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  55: {
    id: 55,
    location_place_id: 55,
    event_place_id: 32155,
    row: '5',
    seat: '6',
    coord_x: 125,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  54: {
    id: 54,
    location_place_id: 54,
    event_place_id: 32154,
    row: '4',
    seat: '6',
    coord_x: 100,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  53: {
    id: 53,
    location_place_id: 53,
    event_place_id: 32153,
    row: '3',
    seat: '6',
    coord_x: 75,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  51: {
    id: 51,
    location_place_id: 51,
    event_place_id: 32151,
    row: '1',
    seat: '6',
    coord_x: 25,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  61: {
    id: 61,
    location_place_id: 61,
    event_place_id: 32161,
    row: '1',
    seat: '7',
    coord_x: 25,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  50: {
    id: 50,
    location_place_id: 50,
    event_place_id: 32150,
    row: '10',
    seat: '5',
    coord_x: 250,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  49: {
    id: 49,
    location_place_id: 49,
    event_place_id: 32149,
    row: '9',
    seat: '5',
    coord_x: 225,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  48: {
    id: 48,
    location_place_id: 48,
    event_place_id: 32148,
    row: '8',
    seat: '5',
    coord_x: 200,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  65: {
    id: 65,
    location_place_id: 65,
    event_place_id: 32165,
    row: '5',
    seat: '7',
    coord_x: 125,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  40: {
    id: 40,
    location_place_id: 40,
    event_place_id: 32140,
    row: '10',
    seat: '4',
    coord_x: 250,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  39: {
    id: 39,
    location_place_id: 39,
    event_place_id: 32139,
    row: '9',
    seat: '4',
    coord_x: 225,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  4: {
    id: 4,
    location_place_id: 4,
    event_place_id: 3214,
    row: '4',
    seat: '1',
    coord_x: 100,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  3: {
    id: 3,
    location_place_id: 3,
    event_place_id: 3213,
    row: '3',
    seat: '1',
    coord_x: 75,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  60: {
    id: 60,
    location_place_id: 60,
    event_place_id: 32160,
    row: '10',
    seat: '6',
    coord_x: 250,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  1746: {
    id: 1746,
    location_place_id: 1746,
    event_place_id: 3211746,
    row: '9',
    seat: '28',
    coord_x: 550,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  64: {
    id: 64,
    location_place_id: 64,
    event_place_id: 32164,
    row: '4',
    seat: '7',
    coord_x: 100,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  63: {
    id: 63,
    location_place_id: 63,
    event_place_id: 32163,
    row: '3',
    seat: '7',
    coord_x: 75,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  62: {
    id: 62,
    location_place_id: 62,
    event_place_id: 32162,
    row: '2',
    seat: '7',
    coord_x: 50,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 0,
    opened: false,
  },
  87: {
    id: 87,
    location_place_id: 87,
    event_place_id: 32187,
    row: '7',
    seat: '9',
    coord_x: 175,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 100,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  34: {
    id: 34,
    location_place_id: 34,
    event_place_id: 32134,
    row: '4',
    seat: '4',
    coord_x: 100,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  1712: {
    id: 1712,
    location_place_id: 1712,
    event_place_id: 3211712,
    row: '2',
    seat: '25',
    coord_x: 475,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1711: {
    id: 1711,
    location_place_id: 1711,
    event_place_id: 3211711,
    row: '1',
    seat: '25',
    coord_x: 475,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  30: {
    id: 30,
    location_place_id: 30,
    event_place_id: 32130,
    row: '10',
    seat: '3',
    coord_x: 250,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  31: {
    id: 31,
    location_place_id: 31,
    event_place_id: 32131,
    row: '1',
    seat: '4',
    coord_x: 25,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 300,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  32: {
    id: 32,
    location_place_id: 32,
    event_place_id: 32132,
    row: '2',
    seat: '4',
    coord_x: 50,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 300,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  33: {
    id: 33,
    location_place_id: 33,
    event_place_id: 32133,
    row: '3',
    seat: '4',
    coord_x: 75,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  1706: {
    id: 1706,
    location_place_id: 1706,
    event_place_id: 3211706,
    row: '5',
    seat: '24',
    coord_x: 450,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1705: {
    id: 1705,
    location_place_id: 1705,
    event_place_id: 3211705,
    row: '4',
    seat: '24',
    coord_x: 450,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1704: {
    id: 1704,
    location_place_id: 1704,
    event_place_id: 3211704,
    row: '3',
    seat: '24',
    coord_x: 450,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1703: {
    id: 1703,
    location_place_id: 1703,
    event_place_id: 3211703,
    row: '2',
    seat: '24',
    coord_x: 450,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1702: {
    id: 1702,
    location_place_id: 1702,
    event_place_id: 3211702,
    row: '1',
    seat: '24',
    coord_x: 450,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  37: {
    id: 37,
    location_place_id: 37,
    event_place_id: 32137,
    row: '7',
    seat: '4',
    coord_x: 175,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  35: {
    id: 35,
    location_place_id: 35,
    event_place_id: 32135,
    row: '5',
    seat: '4',
    coord_x: 125,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  36: {
    id: 36,
    location_place_id: 36,
    event_place_id: 32136,
    row: '6',
    seat: '4',
    coord_x: 150,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  28: {
    id: 28,
    location_place_id: 28,
    event_place_id: 32128,
    row: '8',
    seat: '3',
    coord_x: 200,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  1697: {
    id: 1697,
    location_place_id: 1697,
    event_place_id: 3211697,
    row: '5',
    seat: '23',
    coord_x: 425,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1696: {
    id: 1696,
    location_place_id: 1696,
    event_place_id: 3211696,
    row: '4',
    seat: '23',
    coord_x: 425,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1695: {
    id: 1695,
    location_place_id: 1695,
    event_place_id: 3211695,
    row: '3',
    seat: '23',
    coord_x: 425,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1694: {
    id: 1694,
    location_place_id: 1694,
    event_place_id: 3211694,
    row: '2',
    seat: '23',
    coord_x: 425,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1693: {
    id: 1693,
    location_place_id: 1693,
    event_place_id: 3211693,
    row: '1',
    seat: '23',
    coord_x: 425,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  38: {
    id: 38,
    location_place_id: 38,
    event_place_id: 32138,
    row: '8',
    seat: '4',
    coord_x: 200,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  71: {
    id: 71,
    location_place_id: 71,
    event_place_id: 32171,
    row: '1',
    seat: '8',
    coord_x: 25,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 200,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  41: {
    id: 41,
    location_place_id: 41,
    event_place_id: 32141,
    row: '1',
    seat: '5',
    coord_x: 25,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 300,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  1688: {
    id: 1688,
    location_place_id: 1688,
    event_place_id: 3211688,
    row: '5',
    seat: '22',
    coord_x: 400,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1687: {
    id: 1687,
    location_place_id: 1687,
    event_place_id: 3211687,
    row: '4',
    seat: '22',
    coord_x: 400,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  29: {
    id: 29,
    location_place_id: 29,
    event_place_id: 32129,
    row: '9',
    seat: '3',
    coord_x: 225,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  26: {
    id: 26,
    location_place_id: 26,
    event_place_id: 32126,
    row: '6',
    seat: '3',
    coord_x: 150,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 500,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  27: {
    id: 27,
    location_place_id: 27,
    event_place_id: 32127,
    row: '7',
    seat: '3',
    coord_x: 175,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 500,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  15: {
    id: 15,
    location_place_id: 15,
    event_place_id: 32115,
    row: '5',
    seat: '2',
    coord_x: 125,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 500,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  5: {
    id: 5,
    location_place_id: 5,
    event_place_id: 3215,
    row: '5',
    seat: '1',
    coord_x: 125,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 600,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  6: {
    id: 6,
    location_place_id: 6,
    event_place_id: 3216,
    row: '6',
    seat: '1',
    coord_x: 150,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 600,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  7: {
    id: 7,
    location_place_id: 7,
    event_place_id: 3217,
    row: '7',
    seat: '1',
    coord_x: 175,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 600,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  8: {
    id: 8,
    location_place_id: 8,
    event_place_id: 3218,
    row: '8',
    seat: '1',
    coord_x: 200,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 600,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  1739: {
    id: 1739,
    location_place_id: 1739,
    event_place_id: 3211739,
    row: '2',
    seat: '28',
    coord_x: 550,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1738: {
    id: 1738,
    location_place_id: 1738,
    event_place_id: 3211738,
    row: '1',
    seat: '28',
    coord_x: 550,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  9: {
    id: 9,
    location_place_id: 9,
    event_place_id: 3219,
    row: '9',
    seat: '1',
    coord_x: 225,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 500,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  10: {
    id: 10,
    location_place_id: 10,
    event_place_id: 32110,
    row: '10',
    seat: '1',
    coord_x: 250,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 500,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  11: {
    id: 11,
    location_place_id: 11,
    event_place_id: 32111,
    row: '1',
    seat: '2',
    coord_x: 25,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 500,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  12: {
    id: 12,
    location_place_id: 12,
    event_place_id: 32112,
    row: '2',
    seat: '2',
    coord_x: 50,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 500,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  13: {
    id: 13,
    location_place_id: 13,
    event_place_id: 32113,
    row: '3',
    seat: '2',
    coord_x: 75,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 500,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  14: {
    id: 14,
    location_place_id: 14,
    event_place_id: 32114,
    row: '4',
    seat: '2',
    coord_x: 100,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 500,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  1730: {
    id: 1730,
    location_place_id: 1730,
    event_place_id: 3211730,
    row: '2',
    seat: '27',
    coord_x: 525,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1685: {
    id: 1685,
    location_place_id: 1685,
    event_place_id: 3211685,
    row: '2',
    seat: '22',
    coord_x: 400,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1729: {
    id: 1729,
    location_place_id: 1729,
    event_place_id: 3211729,
    row: '1',
    seat: '27',
    coord_x: 525,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  16: {
    id: 16,
    location_place_id: 16,
    event_place_id: 32116,
    row: '6',
    seat: '2',
    coord_x: 150,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 500,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  17: {
    id: 17,
    location_place_id: 17,
    event_place_id: 32117,
    row: '7',
    seat: '2',
    coord_x: 175,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 500,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  18: {
    id: 18,
    location_place_id: 18,
    event_place_id: 32118,
    row: '8',
    seat: '2',
    coord_x: 200,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 500,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  19: {
    id: 19,
    location_place_id: 19,
    event_place_id: 32119,
    row: '9',
    seat: '2',
    coord_x: 225,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 500,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  20: {
    id: 20,
    location_place_id: 20,
    event_place_id: 32120,
    row: '10',
    seat: '2',
    coord_x: 250,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 500,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  21: {
    id: 21,
    location_place_id: 21,
    event_place_id: 32121,
    row: '1',
    seat: '3',
    coord_x: 25,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  22: {
    id: 22,
    location_place_id: 22,
    event_place_id: 32122,
    row: '2',
    seat: '3',
    coord_x: 50,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  1721: {
    id: 1721,
    location_place_id: 1721,
    event_place_id: 3211721,
    row: '2',
    seat: '26',
    coord_x: 500,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1720: {
    id: 1720,
    location_place_id: 1720,
    event_place_id: 3211720,
    row: '1',
    seat: '26',
    coord_x: 500,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  23: {
    id: 23,
    location_place_id: 23,
    event_place_id: 32123,
    row: '3',
    seat: '3',
    coord_x: 75,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  24: {
    id: 24,
    location_place_id: 24,
    event_place_id: 32124,
    row: '4',
    seat: '3',
    coord_x: 100,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 500,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  25: {
    id: 25,
    location_place_id: 25,
    event_place_id: 32125,
    row: '5',
    seat: '3',
    coord_x: 125,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 500,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  1686: {
    id: 1686,
    location_place_id: 1686,
    event_place_id: 3211686,
    row: '3',
    seat: '22',
    coord_x: 400,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1684: {
    id: 1684,
    location_place_id: 1684,
    event_place_id: 3211684,
    row: '1',
    seat: '22',
    coord_x: 400,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  88: {
    id: 88,
    location_place_id: 88,
    event_place_id: 32188,
    row: '8',
    seat: '9',
    coord_x: 200,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 100,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  82: {
    id: 82,
    location_place_id: 82,
    event_place_id: 32182,
    row: '2',
    seat: '9',
    coord_x: 50,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 100,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  1650: {
    id: 1650,
    location_place_id: 1650,
    event_place_id: 3211650,
    row: '5',
    seat: '12',
    coord_x: 600,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1649: {
    id: 1649,
    location_place_id: 1649,
    event_place_id: 3211649,
    row: '4',
    seat: '12',
    coord_x: 600,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1648: {
    id: 1648,
    location_place_id: 1648,
    event_place_id: 3211648,
    row: '3',
    seat: '12',
    coord_x: 600,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1647: {
    id: 1647,
    location_place_id: 1647,
    event_place_id: 3211647,
    row: '2',
    seat: '12',
    coord_x: 600,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1646: {
    id: 1646,
    location_place_id: 1646,
    event_place_id: 3211646,
    row: '1',
    seat: '12',
    coord_x: 600,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  75: {
    id: 75,
    location_place_id: 75,
    event_place_id: 32175,
    row: '5',
    seat: '8',
    coord_x: 125,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 200,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  76: {
    id: 76,
    location_place_id: 76,
    event_place_id: 32176,
    row: '6',
    seat: '8',
    coord_x: 150,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 200,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  77: {
    id: 77,
    location_place_id: 77,
    event_place_id: 32177,
    row: '7',
    seat: '8',
    coord_x: 175,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 200,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  78: {
    id: 78,
    location_place_id: 78,
    event_place_id: 32178,
    row: '8',
    seat: '8',
    coord_x: 200,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 200,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  79: {
    id: 79,
    location_place_id: 79,
    event_place_id: 32179,
    row: '9',
    seat: '8',
    coord_x: 225,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 200,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  80: {
    id: 80,
    location_place_id: 80,
    event_place_id: 32180,
    row: '10',
    seat: '8',
    coord_x: 250,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 200,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  81: {
    id: 81,
    location_place_id: 81,
    event_place_id: 32181,
    row: '1',
    seat: '9',
    coord_x: 25,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 100,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  1637: {
    id: 1637,
    location_place_id: 1637,
    event_place_id: 3211637,
    row: '2',
    seat: '11',
    coord_x: 575,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1652: {
    id: 1652,
    location_place_id: 1652,
    event_place_id: 3211652,
    row: '7',
    seat: '12',
    coord_x: 600,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1636: {
    id: 1636,
    location_place_id: 1636,
    event_place_id: 3211636,
    row: '1',
    seat: '11',
    coord_x: 575,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  83: {
    id: 83,
    location_place_id: 83,
    event_place_id: 32183,
    row: '3',
    seat: '9',
    coord_x: 75,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 100,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  84: {
    id: 84,
    location_place_id: 84,
    event_place_id: 32184,
    row: '4',
    seat: '9',
    coord_x: 100,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 100,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  85: {
    id: 85,
    location_place_id: 85,
    event_place_id: 32185,
    row: '5',
    seat: '9',
    coord_x: 125,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 100,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  97: {
    id: 97,
    location_place_id: 97,
    event_place_id: 32197,
    row: '7',
    seat: '10',
    coord_x: 175,
    coord_y: 250,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 100,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  96: {
    id: 96,
    location_place_id: 96,
    event_place_id: 32196,
    row: '6',
    seat: '10',
    coord_x: 150,
    coord_y: 250,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 100,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  95: {
    id: 95,
    location_place_id: 95,
    event_place_id: 32195,
    row: '5',
    seat: '10',
    coord_x: 125,
    coord_y: 250,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 100,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  94: {
    id: 94,
    location_place_id: 94,
    event_place_id: 32194,
    row: '4',
    seat: '10',
    coord_x: 100,
    coord_y: 250,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 100,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  93: {
    id: 93,
    location_place_id: 93,
    event_place_id: 32193,
    row: '3',
    seat: '10',
    coord_x: 75,
    coord_y: 250,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 100,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  86: {
    id: 86,
    location_place_id: 86,
    event_place_id: 32186,
    row: '6',
    seat: '9',
    coord_x: 150,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 100,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  91: {
    id: 91,
    location_place_id: 91,
    event_place_id: 32191,
    row: '1',
    seat: '10',
    coord_x: 25,
    coord_y: 250,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 10000000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  90: {
    id: 90,
    location_place_id: 90,
    event_place_id: 32190,
    row: '10',
    seat: '9',
    coord_x: 250,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 100,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  89: {
    id: 89,
    location_place_id: 89,
    event_place_id: 32189,
    row: '9',
    seat: '9',
    coord_x: 225,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 100,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  1651: {
    id: 1651,
    location_place_id: 1651,
    event_place_id: 3211651,
    row: '6',
    seat: '12',
    coord_x: 600,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1653: {
    id: 1653,
    location_place_id: 1653,
    event_place_id: 3211653,
    row: '8',
    seat: '12',
    coord_x: 600,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  42: {
    id: 42,
    location_place_id: 42,
    event_place_id: 32142,
    row: '2',
    seat: '5',
    coord_x: 50,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 300,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  1669: {
    id: 1669,
    location_place_id: 1669,
    event_place_id: 3211669,
    row: '4',
    seat: '20',
    coord_x: 350,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  43: {
    id: 43,
    location_place_id: 43,
    event_place_id: 32143,
    row: '3',
    seat: '5',
    coord_x: 75,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  44: {
    id: 44,
    location_place_id: 44,
    event_place_id: 32144,
    row: '4',
    seat: '5',
    coord_x: 100,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  45: {
    id: 45,
    location_place_id: 45,
    event_place_id: 32145,
    row: '5',
    seat: '5',
    coord_x: 125,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  1679: {
    id: 1679,
    location_place_id: 1679,
    event_place_id: 3211679,
    row: '5',
    seat: '21',
    coord_x: 375,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1678: {
    id: 1678,
    location_place_id: 1678,
    event_place_id: 3211678,
    row: '4',
    seat: '21',
    coord_x: 375,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1677: {
    id: 1677,
    location_place_id: 1677,
    event_place_id: 3211677,
    row: '3',
    seat: '21',
    coord_x: 375,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1676: {
    id: 1676,
    location_place_id: 1676,
    event_place_id: 3211676,
    row: '2',
    seat: '21',
    coord_x: 375,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1675: {
    id: 1675,
    location_place_id: 1675,
    event_place_id: 3211675,
    row: '1',
    seat: '21',
    coord_x: 375,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  72: {
    id: 72,
    location_place_id: 72,
    event_place_id: 32172,
    row: '2',
    seat: '8',
    coord_x: 50,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 200,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  47: {
    id: 47,
    location_place_id: 47,
    event_place_id: 32147,
    row: '7',
    seat: '5',
    coord_x: 175,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  73: {
    id: 73,
    location_place_id: 73,
    event_place_id: 32173,
    row: '3',
    seat: '8',
    coord_x: 75,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 200,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  74: {
    id: 74,
    location_place_id: 74,
    event_place_id: 32174,
    row: '4',
    seat: '8',
    coord_x: 100,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 200,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'green',
  },
  1670: {
    id: 1670,
    location_place_id: 1670,
    event_place_id: 3211670,
    row: '5',
    seat: '20',
    coord_x: 350,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1668: {
    id: 1668,
    location_place_id: 1668,
    event_place_id: 3211668,
    row: '3',
    seat: '20',
    coord_x: 350,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1654: {
    id: 1654,
    location_place_id: 1654,
    event_place_id: 3211654,
    row: '9',
    seat: '12',
    coord_x: 600,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1667: {
    id: 1667,
    location_place_id: 1667,
    event_place_id: 3211667,
    row: '2',
    seat: '20',
    coord_x: 350,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1666: {
    id: 1666,
    location_place_id: 1666,
    event_place_id: 3211666,
    row: '1',
    seat: '20',
    coord_x: 350,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1665: {
    id: 1665,
    location_place_id: 1665,
    event_place_id: 3211665,
    row: '10',
    seat: '13',
    coord_x: 625,
    coord_y: 250,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1664: {
    id: 1664,
    location_place_id: 1664,
    event_place_id: 3211664,
    row: '9',
    seat: '13',
    coord_x: 625,
    coord_y: 225,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1663: {
    id: 1663,
    location_place_id: 1663,
    event_place_id: 3211663,
    row: '8',
    seat: '13',
    coord_x: 625,
    coord_y: 200,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1662: {
    id: 1662,
    location_place_id: 1662,
    event_place_id: 3211662,
    row: '7',
    seat: '13',
    coord_x: 625,
    coord_y: 175,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1661: {
    id: 1661,
    location_place_id: 1661,
    event_place_id: 3211661,
    row: '6',
    seat: '13',
    coord_x: 625,
    coord_y: 150,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1660: {
    id: 1660,
    location_place_id: 1660,
    event_place_id: 3211660,
    row: '5',
    seat: '13',
    coord_x: 625,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1659: {
    id: 1659,
    location_place_id: 1659,
    event_place_id: 3211659,
    row: '4',
    seat: '13',
    coord_x: 625,
    coord_y: 100,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1658: {
    id: 1658,
    location_place_id: 1658,
    event_place_id: 3211658,
    row: '3',
    seat: '13',
    coord_x: 625,
    coord_y: 75,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1657: {
    id: 1657,
    location_place_id: 1657,
    event_place_id: 3211657,
    row: '2',
    seat: '13',
    coord_x: 625,
    coord_y: 50,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'available',
    bg_color: '#fff',
    border_color: 'blue',
  },
  1656: {
    id: 1656,
    location_place_id: 1656,
    event_place_id: 3211656,
    row: '1',
    seat: '13',
    coord_x: 625,
    coord_y: 25,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'reserved',
    bg_color: 'black',
    border_color: 'red',
  },
  1655: {
    id: 1655,
    location_place_id: 1655,
    event_place_id: 3211655,
    row: '10',
    seat: '12',
    coord_x: 600,
    coord_y: 250,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 1000,
    opened: true,
    reserve_status: 'reserved',
    bg_color: 'black',
    border_color: 'red',
  },
  46: {
    id: 46,
    location_place_id: 46,
    event_place_id: 32146,
    row: '6',
    seat: '5',
    coord_x: 150,
    coord_y: 125,
    sector: {
      id: 1,
      name: 'Партер',
      is_simple: false,
    },
    tooltip: {
      html: `
        <div class="place-tooltip">
          <span>
            <b>id:</b> 995542
          </span>
          <span>
            <b>Сектор:</b> Основной
          </span>

          <div class="place-tooltip__bottom">
              <a class="place-tooltip__btn">Посмотреть инфо</a>
              <a class="place-tooltip__btn">История изменений</a>
          </div>
        </div>
      `,
    },
    price: 400,
    opened: true,
    reserve_status: 'reserved',
    bg_color: 'black',
    border_color: 'gred',
  },
}

export { MAP_PLACES }
