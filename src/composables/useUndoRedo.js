import { isFunction } from '@/utils/isFunction'

import { VStateHistoryManager } from '@/js/VStateHistoryManager'

import { onMounted, onUnmounted } from 'vue'


function useUndoRedo(stateRef, onUndoLastAction) {
  if (!stateRef?.value) {
    console.warn('[useUndoRedo] необходимо передать ref() состояния')
  }

  // история состояний мест на карте
  const StateHistoryManager = new VStateHistoryManager()

  // отмена последнего действия с выделением мест
  const undoLastAction = () => {
    const prevState = StateHistoryManager.undo()

    if (!prevState) {
      return
    }

    stateRef.value = prevState

    if (isFunction(onUndoLastAction)) {
      onUndoLastAction()
    }
  }

  // отмена последнего действия с выделением мест на ctrl/command + z
  const keyDownListener = evt => {
    if ((evt.ctrlKey || evt.metaKey) && evt.code === 'KeyZ') {
      undoLastAction()
    }
  }

  onMounted(() => {
    StateHistoryManager.saveState(stateRef.value)
    document.addEventListener('keydown', keyDownListener)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', keyDownListener)
  })

  return {
    StateHistoryManager,
    undoLastAction,
  }
}

export { useUndoRedo }
