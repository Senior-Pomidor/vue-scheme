// элемент слой-обёртка мест на свг карте
const elSvgMap = ref()

const elSvgMapTranslateCoords = ref({
  x: 0,
  y: 0,
})

watch(elSvgMapTranslateCoords, newCoords => {
  if (!newCoords) {
    return
  }

  // targetEl.style.transform = `translate(${currentX}px, ${currentY}px)`


  elSvgMap.value.style.transform = `translate(${newCoords.x || '0'}px, ${newCoords.y || '0'}px)`
  // elSvgMap.value.setAttribute('transform', `translate(${newCoords.x || '0'}, ${newCoords.y || '0'})`)
}, { deep: true })


const isFirstRender = ref(true)

watch(() => props.seats, () => {
  if (!isFirstRender.value) {
    return
  }

  isFirstRender.value = false
  nextTick(centerSvgMap)
})

const centerSvgMap = () => {
  const x = elSvgMapWrapper.value.getBoundingClientRect().width / 2
    - elSvgMap.value.getBBox().width / 2

  const y = elSvgMapWrapper.value.getBoundingClientRect().height / 2
    - elSvgMap.value.getBBox().height / 2

  elSvgMapTranslateCoords.value.x = x
  elSvgMapTranslateCoords.value.y = y

  // Обновляем последние координаты после центрирования
  lastMapTranslateCoords.x = x
  lastMapTranslateCoords.y = y
}
