import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './slices/todos'
import filterReducer from './slices/filter'

export default function setupStore(
  preloadedState = {},
  setupMiddlewares = middlewares => middlewares
) {
  return configureStore({
    reducer: {
      todos: todosReducer,
      filter: filterReducer
    },
    middleware: getDefaultMiddleware =>
      setupMiddlewares(getDefaultMiddleware()),
    preloadedState
  })
}
