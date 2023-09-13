import PropTypes from 'prop-types'
import { ALL, COMPLETED, UNCOMPLETED } from '../../../constants/todoFilters'
import Filter from '../filter'

import styles from './index.module.scss'

export default function Footer({
  uncompletedCount,
  filter,
  deleteCompletedTodos,
  setFilter
}) {
  return (
    <div className={styles.container}>
      <div>
        <span>
          {uncompletedCount} {uncompletedCount === 1 ? 'item' : 'items'} left
        </span>
      </div>
      <div>
        <Filter filter={filter} setFilter={value => setFilter(value)} />
      </div>
      <div>
        <button
          type="button"
          className={styles['delete-completed-button']}
          onClick={deleteCompletedTodos}
        >
          Clear completed
        </button>
      </div>
    </div>
  )
}

Footer.propTypes = {
  uncompletedCount: PropTypes.number.isRequired,
  filter: PropTypes.oneOf([ALL, COMPLETED, UNCOMPLETED]).isRequired,
  deleteCompletedTodos: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired
}
