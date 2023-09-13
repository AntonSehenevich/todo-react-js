import PropTypes from 'prop-types'
import { useState } from 'react'
import withDragAndDrop from '../with-drag-and-drop'
import CloseIcon from '../../icons/close'
import CircleIcon from '../../icons/circle'
import CheckedCircleIcon from '../../icons/checked-circle'
import TextInput from '../text-input'

import styles from './index.module.scss'

function ItemEditor({
  item,
  editItem,
  deleteItem,
  toggleItem,
  onEditStateChanged
}) {
  const [isEdit, setIsEdit] = useState(false)
  const onSave = text => {
    setIsEdit(false)
    onEditStateChanged(false)
    editItem(item.id, text)
  }

  return (
    <div className={styles.container}>
      {item.completed ? (
        <CheckedCircleIcon
          width={30}
          height={30}
          handleClick={() => toggleItem(item.id)}
        />
      ) : (
        <CircleIcon
          width={30}
          height={30}
          handleClick={() => toggleItem(item.id)}
        />
      )}
      {isEdit ? (
        <TextInput className={styles.editor} text={item.text} onSave={onSave} />
      ) : (
        <button
          type="button"
          className={item.completed ? styles.completed : styles.text}
          onClick={() => {
            setIsEdit(true)
            onEditStateChanged(true)
          }}
        >
          {item.text}
        </button>
      )}
      <CloseIcon
        className={styles['icon-delete']}
        width={30}
        height={30}
        handleClick={() => deleteItem(item.id)}
      />
    </div>
  )
}

ItemEditor.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  onEditStateChanged: PropTypes.func.isRequired
}

export default withDragAndDrop(ItemEditor)
