import PropTypes from 'prop-types'
import { useRef } from 'react'
import ItemEditor from '../item-editor'
import Item from '../item'

export default function ItemsList({
  todos,
  editTodo,
  deleteTodo,
  toggleTodo,
  reorderTodos
}) {
  const dndSource = useRef(null)
  const dndDestination = useRef(null)

  return (
    <ul data-testid="todos-list">
      {todos.map(todo => (
        <Item
          key={todo.id}
          handleDragStart={() => {
            dndSource.current = todo.id
          }}
          handleDragEnter={() => {
            dndDestination.current = todo.id
          }}
          handleDragEnd={() => {
            const source = dndSource.current
            const destination = dndDestination.current

            dndSource.current = null
            dndDestination.current = null

            reorderTodos({ source, destination })
          }}
        >
          <ItemEditor
            item={todo}
            editItem={(id, text) => editTodo({ id, text })}
            deleteItem={id => deleteTodo(id)}
            toggleItem={id => toggleTodo(id)}
          />
        </Item>
      ))}
    </ul>
  )
}

ItemsList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      text: PropTypes.string,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  reorderTodos: PropTypes.func.isRequired
}
