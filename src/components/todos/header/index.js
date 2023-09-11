import PropTypes from 'prop-types'
import TextInput from '../text-input'

import styles from './index.module.scss'

export default function Header({ addTodo }) {
  const onSave = text => {
    const tidyText = (text || '').trim()

    if (tidyText.length > 0) {
      addTodo(tidyText)
    }
  }

  return (
    <div className={styles.container} data-testid="add-todo">
      <TextInput
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
