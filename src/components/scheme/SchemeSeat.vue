<template>
  <g
    v-if="props.seat"
    ref="$el"
    class="seat"
  >
    <rect
      :width="getSeatSize.width"
      :height="getSeatSize.height"
      :x="props.seat.x"
      :y="props.seat.y"
      rx="3"
      ry="3"
      :stroke-width="2"
      :style="getStyles"
    >
    </rect>
    <!-- XXX: оставляем 2 text -->
    <text
      v-if="seat.row"
      class="seat__text"
      color="black"
      :x="getTextCoords.row.x"
      :y="getTextCoords.row.y"
    >
      <tspan
        text-anchor="start"
        class="seat__row"
      >
        {{ seat.row }}
      </tspan>
    </text>

    <text
      v-if="seat.seat"
      class="seat__text"
      color="black"
      :x="getTextCoords.seat.x"
      :y="getTextCoords.seat.y"
    >
      <tspan
        text-anchor="end"
        class="seat__seat"
      >
        {{ seat.seat }}
      </tspan>
    </text>
  </g>
</template>

<script setup>
import { ref, computed } from "vue";
// markRaw
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
  // selectable: {
  //   type: Boolean,
  //   default: false,
  // },

  // stateStatus: {
  //   type: String,
  //   default: '',
  // },
});

const getSeatSize = computed(() => {
  return {
    width: props.seatWidth + 2,
    height: props.seatHeight + 2,
  }
})

const getTextCoords = computed(() => {
  return {
    row: {
      x: props.seat.x + 2,
      y: props.seat.y + props.seatWidth - 1,
    },

    seat: {
      x: props.seat.x + props.seatWidth,
      y: props.seat.y + 12,
    },
  }
})

const getStyles = computed(() => {
  const styles = {};

  if (Array.isArray(props.seat.border_color)) {
    styles["--stroke-color"] = props.seat.border_color[0];
    styles["--stroke-color-hover"] = props.seat.border_color[1] || props.seat.border_color[0] || "";
  } else {
    styles["--stroke-color"] = props.seat.border_color || "";
  }

  if (Array.isArray(props.seat.bg_color)) {
    styles["--fill-color"] = props.seat.bg_color[0];
    styles["--fill-color-hover"] = props.seat.bg_color[1] || props.seat.bg_color[0] || "";
  } else {
    styles["--fill-color"] = props.seat.bg_color || "";
  }

  return styles;
});

const $el = ref(null);

// для явного возврата нужного элемента
defineExpose({
  $el,
});
</script>

<style lang="less" scoped>
.seat {
  --fill-color: #999;
  --fill-color-hover: #353ffb;

  --stroke-color: #808080;
  --stroke-color-hover: #808080;

  // cursor: pointer;

  &__text {
    pointer-events: none;
  }

  &__row {
    font-size: 8px;
  }

  &__seat {
    font-size: 12px;
    top: 15px;
  }

  rect {
    stroke: var(--stroke-color);
    fill: var(--fill-color);
  }
}
</style>

<style lang="less">
.elSvgMapWrapper:not(._select_mode) {
  // .seat {
  //   &:not(._disabled) {
  //     .hover({
  //       rect {
  //         fill: var(--fill-color-hover);
  //       }
  //     })
  //   }

  // .hover({
  //     rect {
  //       stroke: var(--stroke-color-hover);
  //     }
  //   })
  // }
}
</style>
