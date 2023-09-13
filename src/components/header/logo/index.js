import PropTypes from 'prop-types'

export default function LogoIcon({ className, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="-10 10 50 40"
      data-testid="logo-icon"
    >
      <path
        fill="transparent"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        transform="rotate(45 15 25)"
        d="M 5 45 H 25 V 5"
      />
    </svg>
  )
}

LogoIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

LogoIcon.defaultProps = {
  className: null
}
