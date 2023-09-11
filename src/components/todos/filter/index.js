import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ALL, COMPLETED, UNCOMPLETED } from '../../../constants/todoFilters'

import styles from './index.module.scss'

export default function Filter({ filter, setFilter }) {
  return (
    <ul className={styles.list} data-testid="todos-filter">
      <li>
        <button
          type="button"
          className={classNames(
            styles.button,
            filter === ALL ? styles.active : null
          )}
          onClick={() => setFilter(ALL)}
        >
          All
        </button>
      </li>
      <li>
        <button
          type="button"
          className={classNames(
            styles.button,
            filter === UNCOMPLETED ? styles.active : null
          )}
          onClick={() => setFilter(UNCOMPLETED)}
        >
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          className={classNames(
            styles.button,
            filter === COMPLETED ? styles.active : null
          )}
          onClick={() => setFilter(COMPLETED)}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

Filter.propTypes = {
  filter: PropTypes.oneOf([ALL, COMPLETED, UNCOMPLETED]).isRequired,
  setFilter: PropTypes.func.isRequired
}
