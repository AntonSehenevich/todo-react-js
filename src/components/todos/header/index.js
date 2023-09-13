import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'
import TextInput from '../text-input'

import styles from './index.module.scss'

export default function Header({ addTodo }) {
  const inputRef = useRef(null)
  const onSave = text => {
    const tidyText = (text || '').trim()

    if (tidyText.length > 0) {
      addTodo(tidyText)
    }
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className={styles.container} data-testid="add-todo">
      <TextInput
        ref={inputRef}
        placeholder="Something to do?"
        disableSaveOnBlur
        onSave={onSave}
      />
    </div>
  )
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}
