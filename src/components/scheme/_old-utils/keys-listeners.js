// START: лисенеры клавиш и моды

// настройки
const isShiftKey = ref(false)
const isSpaceKey = ref(false)
const isControlKey = ref(false)
const isMouseDown = ref(false)
const isMouseMiddle = ref(false)

// const isModeGrabbing = computed(() => isMouseDown.value && isSpaceKey.value || isMouseMiddle.value)

const isModeGrabbing = computed(() => isShiftKey.value || isMouseMiddle.value)
const isModeUnSelection = computed(() => !isModeGrabbing.value && isControlKey.value)
const isModeSelection = computed(() => !isModeGrabbing.value && !isModeUnSelection.value)

const currentAction = ref('')

const currentActionNames = ref({
  selection: 'Выделение мест',
  unselection: 'Отмена выделения мест',
  grabbing: 'Перемещение схемы',
})

// END: scheme global listeners

// START: document global listeners
const addGlobalEventListeners = () => {
  document.addEventListener('mousemove', handleSvgSchemeMouseMoveDebounced)

  document.addEventListener('keydown', evt => {
    if (evt.key === 'Shift') {
      isShiftKey.value = true
    }
  })

  document.addEventListener('keyup', evt => {
    if (evt.key === 'Shift') {
      isShiftKey.value = false
    }
  })

  // перенёс в вотчер, потому что в админке не успевает прогрузиться схема
  // и лисенер вешается на undefined
  // elSvgMapWrapper.value.addEventListener('mousedown', evt => {
  //   if (evt.button === 0) {
  //     isMouseDown.value = true
  //   }
  // })

  // elSvgMapWrapper.value.addEventListener('mousedown', evt => {
  //   if (evt.button === 1) {
  //     isMouseMiddle.value = true
  //   }
  // })

  document.addEventListener('mouseup', evt => {
    isMouseDown.value = false
    isMouseMiddle.value = false
  })

  // document.addEventListener('mousemove', handleSvgSchMouseMove)
}

// TODO: доделать остальные
const removeGlobalEventListeners = () => {
  document.removeEventListener('mousemove', handleSvgSchemeMouseMoveDebounced)
}

onMounted(() => {
  // таймаут для прогрузки свг карты с местами
  setTimeout(() => {
    addGlobalEventListeners()

    // Устанавливаем класс _selected для всех уже выбранных мест
    nextTick(() => {
      for (const id in seatsState.value.selectedSeats) {
        const seatElement = document.querySelector(`[data-seat="true"][data-id="${id}"]`)

        if (seatElement) {
          seatElement.classList.add('_selected')
        }
      }
    })

    StateHistoryManager.saveState(seatsState.value)
  }, 100)
})
// END: document global listeners


const isSvgMapWrapperListeners = false
// элемент свг карта
const elSvgMapWrapper = ref()

watch(elSvgMapWrapper, newVal => {
  if (!newVal || isSvgMapWrapperListeners) {
    return
  }

  elSvgMapWrapper.value.addEventListener('mousedown', evt => {
    if (evt.button === 0) {
      isMouseDown.value = true
    }
  })

  elSvgMapWrapper.value.addEventListener('mousedown', evt => {
    if (evt.button === 1) {
      isMouseMiddle.value = true
    }
  })
}, { immediate: true })
