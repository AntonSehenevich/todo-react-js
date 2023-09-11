import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './slices/todos'
import filterReducer from './slices/filter'
// import StateRepository from './persistence/repository'

// const listenerMiddleware = createListenerMiddleware()

// listenerMiddleware.startListening({
//   predicate: (_, currentState, previousState) => currentState !== previousState,
//   effect: (_, listenerApi) => {
//     const state = listenerApi.getState()

//     StateRepository.updateState(state)
//   }
// })

export default function setupStore(
  preloadedState = {},
  setupMiddlewares = getDefaultMiddleware => getDefaultMiddleware()
) {
  return configureStore({
    reducer: {
      todos: todosReducer,
      filter: filterReducer
    },
    middleware: getDefaultMiddleware => setupMiddlewares(getDefaultMiddleware),
    preloadedState
  })
}

// export default setupStore(
//   StateRepository.getState() || {},
//   getDefaultMiddleware =>
//     getDefaultMiddleware().prepend(listenerMiddleware.middleware)
// )
