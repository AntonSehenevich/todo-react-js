import PropTypes from 'prop-types'

import styles from './index.module.scss'

export default function Item({
  children,
  draggable,
  handleDragStart,
  handleDragEnter,
  handleDragEnd
}) {
  return (
    <li
      className={styles.item}
      draggable={draggable}
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragEnd={handleDragEnd}
      onDragOver={e => {
        e.preventDefault()
      }}
    >
      {children}
    </li>
  )
}

Item.propTypes = {
  children: PropTypes.node,
  draggable: PropTypes.bool,
  handleDragStart: PropTypes.func.isRequired,
  handleDragEnter: PropTypes.func.isRequired,
  handleDragEnd: PropTypes.func.isRequired
}

Item.defaultProps = {
  children: null,
  draggable: true
}
