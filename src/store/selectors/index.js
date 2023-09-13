import { createSelector } from 'reselect'
import { ALL, COMPLETED, UNCOMPLETED } from '../../constants/todoFilters'

const getTodos = state => state.todos.items
const getFilter = state => state.filter.current

export default createSelector([getTodos, getFilter], (todos, filter) => {
  const state = {
    filteredItems: [],
    filter,
    totalCount: todos.length,
    uncompletedCount: todos.reduce(
      (counter, todo) => (todo.completed ? counter : counter + 1),
      0
    )
  }

  switch (state.filter) {
    case ALL:
      state.filteredItems = todos
      break
    case COMPLETED:
      state.filteredItems = todos.filter(todo => todo.completed)
      break
    case UNCOMPLETED:
      state.filteredItems = todos.filter(todo => !todo.completed)
      break
    default:
      throw new Error(`Unknown filter: ${state.filter}`)
  }

  return state
})
