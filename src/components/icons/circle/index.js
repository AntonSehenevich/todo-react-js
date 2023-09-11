import PropTypes from 'prop-types'

import styles from '../icons.module.scss'

export default function CircleIcon({ width, height, handleClick }) {
  return (
    <svg
      className={styles.icon}
      width={width}
      height={height}
      viewBox="0 0 50 50"
      onClick={handleClick}
      data-testid="circle-icon"
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="transparent"
        strokeWidth="3"
        stroke="currentColor"
      />
    </svg>
  )
}

CircleIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}
