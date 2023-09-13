import { createListenerMiddleware } from '@reduxjs/toolkit'

export default function setupWithStateChangedListener(
  middlewares,
  handleStateChanged
) {
  const listenerMiddleware = createListenerMiddleware()

  listenerMiddleware.startListening({
    predicate: (_, currentState, previousState) =>
      currentState !== previousState,
    effect: (_, listenerApi) => {
      const state = listenerApi.getState()

      handleStateChanged(state)
    }
  })

  return middlewares.prepend(listenerMiddleware.middleware)
}
