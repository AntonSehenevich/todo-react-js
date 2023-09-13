import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from '../icons.module.scss'

export default function CloseIcon({ className, width, height, handleClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(styles.icon, className)}
      width={width}
      height={height}
      viewBox="0 0 50 50"
      onClick={handleClick}
      data-testid="close-icon"
    >
      <path
        fill="transparent"
        strokeWidth="3"
        stroke="currentColor"
        strokeLinecap="round"
        d="M 5 5 L 45 45 M 45 5 L 5 45"
      />
    </svg>
  )
}

CloseIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}

CloseIcon.defaultProps = {
  className: null
}
