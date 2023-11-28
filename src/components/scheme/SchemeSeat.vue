<template>
  <g
    v-if="props.seat"
    ref="$el"
    class="seat"
  >
    <rect
      :width="props.seatWidth + 2"
      :height="props.seatHeight + 2"
      :x="props.seat.x"
      :y="props.seat.y"
      :rx="props.seat.styles?.rx || 3"
      :ry="props.seat.styles?.ry || 3"
      :fill="props.seat.styles?.bg_color || '#a99498'"
      :stroke="props.seat.styles?.border_color || 'none'"
      :stroke-width="2"
    >
    </rect>
    <!-- :opacity="props.selectable ? 1 : 0.5" -->

    <template v-if="props.seat.sell_channels">
      <!-- шлюз (зелёный) -->
      <circle
        v-if="props.seat.sell_channels.is_api"
        :cx="getSellChanelCoords.is_api.cx"
        :cy="getSellChanelCoords.is_api.cy"
        r="2"
        fill="#07d020"
      >
      </circle>

      <!-- касса (голубой) -->
      <circle
        v-if="props.seat.sell_channels.cashbox"
        :cx="getSellChanelCoords.cashbox.cx"
        :cy="getSellChanelCoords.cashbox.cy"
        r="2"
        fill="#2ec5f3"
      >
      </circle>

      <!-- виджет (синий) -->
      <circle
        v-if="props.seat.sell_channels.widget"
        :cx="getSellChanelCoords.widget.cx"
        :cy="getSellChanelCoords.widget.cy"
        r="2"
        fill="#2e58f3"
      >
      </circle>
    </template>


    <text
      color="black"
      :transform="`translate(${props.seat.x || 0} ${props.seat.coord_y || 0})`"
    >
      <tspan
        v-if="seat.seat"
        :x="seatWidth - 1"
        :y="seatHeight - 9"
        text-anchor="end"
        class="seat__seat"
      >
        {{ seat.seat }}
      </tspan>
      <tspan
        v-if="seat.row"
        :x="2"
        :y="seatHeight - 2"
        text-anchor="start"
        class="seat__row"
      >
        {{ seat.row }}
      </tspan>
    </text>
  </g>
</template>

<script setup>
  import { ref, computed } from 'vue'

  const props = defineProps({
    seat: {
      type: Object,
      default: () => ({}),
    },

    seatWidth: {
      type: [Number, String],
      default: 20,
    },

    seatHeight: {
      type: [Number, String],
      default: 20,
    },

    // условие для выделения места
    selectable: {
      type: Boolean,
      default: false,
    },

    // stateStatus: {
    //   type: String,
    //   default: '',
    // },
  })

  const getSellChanelCoords = computed(() => ({
    is_api: {
      cx: props.seat.x + 3 || 0,
      cy: props.seat.y + 9 || 0,
    },

    widget: {
      cx: props.seat.x + 17 || 0,
      cy: props.seat.y + 17 || 0,
    },

    cashbox: {
      cx: props.seat.x + 3 || 0,
      cy: props.seat.y + 3 || 0,
    },
  }))

  // const isSelectable = computed(() => props.checkSeatSelectionCondition(props.place))
  // const isSelectable = computed(() => props.seat.selectable)

  const $el = ref(null)

  // для явного возврата нужного элемента
  defineExpose({
    $el,
  })
</script>

<style lang="less" scoped>
  .seat {
    cursor: pointer;

    &__row {
      font-size: 8px;
    }

    &__seat {
      font-size: 12px;
    }
  }
</style>
