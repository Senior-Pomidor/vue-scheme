  // настройки рамки-выделения на схеме
  // TODO: выделить selection/unselection mode в отдельную переменную
  // чтобы изменение других модов не обновляло значение computed
  const getSelectionRectSettings = computed(() => {
    const fill = currentAction.value === 'unselection'
      ? 'rgba(239, 89, 89, .26)'
      : 'rgba(106, 229, 251, 0.34)'

    const stroke = currentAction.value === 'unselection'
      ? '#d00404'
      : '#68aafb'

    return {
      fill,
      stroke,
    }
  })

    // нарисованная область выделения
  const elSelectionFrameRect = ref()

  watch(() => getSelectionRectSettings.value, (newVal, oldVal) => {
    if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
      elSelectionFrameRect.value.setAttribute('fill', newVal.fill)
      elSelectionFrameRect.value.setAttribute('stroke', newVal.stroke)
    }
  })
