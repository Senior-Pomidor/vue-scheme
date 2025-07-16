const elActionLayer = ref()
const lastMapTranslateCoords = { x: 0, y: 0 }

const grabbing = () => {
  const targetEl = document.querySelector('#elSvgMap')
  let isDragging = false
  let offsetX; let offsetY

  // отображение/скрытие action_layer
  watch(isModeGrabbing, newVal => {
    if (!elActionLayer.value) {
return
}

    // Просто добавляем/удаляем класс без изменения стилей
    if (newVal) {
      elActionLayer.value.classList.add('_visible')
      currentAction.value = 'grabbing'
    } else {
      elActionLayer.value.classList.remove('_visible')
      currentAction.value = ''
    }
  }, { immediate: true })

  // Следим за изменением elActionLayer для добавления обработчиков
  watch(elActionLayer, newVal => {
    if (!newVal) {
return
}

    const actionLayer = newVal

    actionLayer.addEventListener('mousedown', e => {
      if (!isModeGrabbing.value) {
return
}

      isDragging = true
      offsetX = e.clientX - lastMapTranslateCoords.x
      offsetY = e.clientY - lastMapTranslateCoords.y
    })

    actionLayer.addEventListener('mousemove', e => {
      if (!isDragging || !isModeGrabbing.value) {
return
}

      lastMapTranslateCoords.x = e.clientX - offsetX
      lastMapTranslateCoords.y = e.clientY - offsetY

      requestAnimationFrame(() => {
        targetEl.style.transform = `translate(${lastMapTranslateCoords.x}px, ${lastMapTranslateCoords.y}px)`
      })
    })

    document.addEventListener('mouseup', () => {
      isDragging = false
    })
  }, { immediate: true })
}

const getGrabbingClass = computed(() => {
  if (currentAction.value === 'grabbing') {
    if (isMouseDown.value || isMouseMiddle.value) {
      return '_grabbing'
    }

    return '_grab'
  }

  return ''
})

watch(() => getGrabbingClass.value, (newVal, oldVal) => {
  if (oldVal) {
    elActionLayer.value.classList.remove(oldVal)
  }

  if (newVal) {
    elActionLayer.value.classList.add(newVal)
  }
})
