<script setup>
  import { hexToRgba } from '@/utils/hexToRgba'

  import { computed, ref, inject } from 'vue'


  const props = defineProps({
    seat: Object,
    hovered: Boolean,
    selected: Boolean,
    unselected: Boolean,
    isSelectionMode: Boolean,
    disabled: Boolean,
  })

  const emit = defineEmits(['click', 'mouseenter', 'mouseleave', 'mousedown', 'touchstart'])

  const SEAT_SIZE = inject('SEAT_SIZE')

  const isHovered = ref(false)

  // Конфиг для прямоугольника места
  const rectConfig = computed(() => {
    let fill = props.seat.bg_color || '#ccc'
    let stroke = props.seat.border_color || '#000'

    if (Array.isArray(fill)) {
      fill = fill[0]
    }

    if (Array.isArray(stroke)) {
      stroke = stroke[0]
    }

    if (!props.disabled && (isHovered.value && !props.isSelectionMode || props.selected)) {
      fill = 'blue'
    }

    if (props.unselected) {
      fill = 'violet'
    }

    if (props.disabled) {
      fill = hexToRgba(fill, 0.35)
      stroke = hexToRgba(stroke, 0.35)
    }

    console.log('fill : ', fill)

    return {
      x: props.seat.x,
      y: props.seat.y,
      width: SEAT_SIZE,
      height: SEAT_SIZE,
      fill: fill,
      stroke: props.selected ? 'lightgreen' : stroke,
      strokeWidth: 1,
      cornerRadius: 4,
      listening: true,
      name: 'shape',
      id: String(props.seat.id),
      // FIXME: из-за ебучего опасити всё тормозит
      // Пиздец блять столько времени убил на эти тормоза сукааааааа
      // opacity: props.disabled ? 0.35 : 1,
    }
  })

  // Конфиг для текста номера места
  const seatTextConfig = computed(() => ({
    x: props.seat.x - 2,
    y: props.seat.y - 1,
    width: SEAT_SIZE,
    height: SEAT_SIZE,
    text: props.seat.seat,
    fontSize: 10,
    fill: props.disabled ? hexToRgba('#000', 0.35) : '#000',
    align: 'right',
    verticalAlign: 'bottom',
    listening: false,
  }))

  // Конфиг для текста номера ряда
  const rowTextConfig = computed(() => ({
    x: props.seat.x + 1,
    y: props.seat.y + 2,
    width: SEAT_SIZE,
    height: SEAT_SIZE,
    text: props.seat.row,
    fontSize: 8,
    fill: props.disabled ? hexToRgba('#000', 0.35) : '#000',
    align: 'start',
    verticalAlign: 'top',
    listening: false,
  }))


  const onClick = () => emit('click', props.seat)

  const onMouseEnter = () => {
    emit('mouseenter', props.seat.id)

    // if (!props.isSelectionMode) {
    isHovered.value = true
    // }
  }

  const onMouseLeave = () => {
    emit('mouseleave')
    isHovered.value = false
  }
</script>

<template>
  <v-rect
    :config="rectConfig"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchend="onClick"
    @mousedown="emit('mousedown', $event)"
    @touchstart="emit('touchstart', $event)"
  />
  <v-text :config="seatTextConfig" />
  <v-text :config="rowTextConfig" />
</template>
