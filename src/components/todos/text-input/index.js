import PropTypes from 'prop-types'
import { useState } from 'react'
import classNames from 'classnames'

import styles from './index.module.scss'

const ENTER_KEY = 13

export default function TextInput({
  className,
  text,
  placeholder,
  disableSaveOnBlur,
  onSave
}) {
  const [value, setValue] = useState(text || '')
  const handleChange = e => {
    setValue(e.target.value)
  }
  const handleKeyDown = e => {
    if (e.which === ENTER_KEY) {
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
      autoFocus
      className={classNames(styles.input, className)}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  )
}

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
