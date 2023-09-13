import PropTypes from 'prop-types'
import { forwardRef, useState } from 'react'
import classNames from 'classnames'

import styles from './index.module.scss'

const ENTER_KEY = 'Enter'

const TextInput = forwardRef(function TextInput(
  { className, text, placeholder, disableSaveOnBlur, onSave },
  ref
) {
  const [value, setValue] = useState(text || '')
  const handleChange = e => {
    setValue(e.target.value)
  }
  const handleKeyDown = e => {
    if (e.key === ENTER_KEY) {
      onSave(value)
      setValue('')
    }
  }
  const handleBlur = _ => {
    if (!disableSaveOnBlur) {
      onSave(value)
      setValue('')
    }
  }

  return (
    <input
      type="text"
      ref={ref}
      className={classNames(styles.input, className)}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  )
})

TextInput.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  disableSaveOnBlur: PropTypes.bool,
  onSave: PropTypes.func.isRequired
}

TextInput.defaultProps = {
  className: null,
  text: null,
  placeholder: '',
  disableSaveOnBlur: false
}

export default TextInput
