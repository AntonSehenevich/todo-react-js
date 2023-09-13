import PropTypes from 'prop-types'
import { useState } from 'react'
import Item from './item'

export default function withDragAndDrop(WrappedComponent) {
  function WithDragAndDrop({
    handleDragStart,
    handleDragEnter,
    handleDragEnd,
    ...rest
  }) {
    const [isDraggable, setIsDraggable] = useState(true)

    return (
      <Item
        draggable={isDraggable}
        handleDragStart={handleDragStart}
        handleDragEnter={handleDragEnter}
        handleDragEnd={handleDragEnd}
      >
        <WrappedComponent
          onEditStateChanged={isEdit => setIsDraggable(!isEdit)}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
        />
      </Item>
    )
  }

  WithDragAndDrop.propTypes = {
    handleDragStart: PropTypes.func.isRequired,
    handleDragEnter: PropTypes.func.isRequired,
    handleDragEnd: PropTypes.func.isRequired
  }

  WithDragAndDrop.displayName = `WithDragAndDrop(${
    WrappedComponent.displayName || WrappedComponent.name
  })`

  return WithDragAndDrop
}
