import PropTypes from 'prop-types'

import styles from '../icons.module.scss'

export default function CheckedCircleIcon({ width, height, handleClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
      width={width}
      height={height}
      viewBox="0 0 50 50"
      onClick={handleClick}
      data-testid="checked-circle-icon"
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="transparent"
        strokeWidth="3"
        stroke="currentColor"
      />
      <path
        fill="transparent"
        strokeWidth="3"
        stroke="currentColor"
        strokeLinecap="round"
        transform="rotate(45 7 15) translate(16 -14)"
        d="M 5 35 H 15 V 10"
      />
    </svg>
  )
}

CheckedCircleIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}
