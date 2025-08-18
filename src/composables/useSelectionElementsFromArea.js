import { ref } from 'vue'

function useSelectionElementsFromArea({
  selectionAreaEl,
  selectionFrameEl,
  selectionEls,
  selectionAttr,
}) {
  const selectedElIds = ref({})

  return {
    selectedElIds, //
  }
}

export { useSelectionElementsFromArea }
