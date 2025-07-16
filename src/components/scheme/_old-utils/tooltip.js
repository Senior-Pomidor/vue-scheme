// START: tooltip
import VTooltip from '../../components/ui/VTooltip.vue'

const isTooltip = ref(false)
const tooltipHtml = ref('')
const tooltipParent = ref('')

const openSeatTooltip = seat => {
  if (!seat?.tooltip?.html) {
    return
  }

  tooltipHtml.value = seat.tooltip.html || ''
  tooltipParent.value = `[id="${seat.id}"]`

  isTooltip.value = true
}

const closeSeatTooltip = () => {
  isTooltip.value = false
}
// END: tooltip


// TODO: отрефакторить работу с селекторами
const handleSvgSchemeMouseMove = evt => {
  const $seat = evt.target.closest('g[data-seat="true"]')
  const $schemeInner = evt.target.closest('g[data-svg-inner="true"]')
  const $tooltipBody = evt.target.closest('*[data-tooltip-body="true"]')
  const seatId = $seat?.dataset?.id
  const seatTooltipHTML = getQuotaSeats.value[seatId]?.tooltip?.html

  if (!$schemeInner && !$tooltipBody) {
    closeSeatTooltip()

    return
  }

  if ($seat || seatId || seatTooltipHTML || !$tooltipBody) {
    closeSeatTooltip()

    nextTick(() => {
      openSeatTooltip(getSeats.value[seatId])
    })
  }
}

const handleSvgSchemeMouseMoveDebounced = debounce(handleSvgSchemeMouseMove, 300)
