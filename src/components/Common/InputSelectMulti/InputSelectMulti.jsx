import classNames from 'classnames'
import { useState } from 'react'
import CheckMark from '../Marks/CheckMark/CheckMark'
import './InputSelectMulti.scss'

const InputSelectMulti = ({
  label = 'Options',
  items = [],
  selectedItems = [],
  selectItem,
  deselectItem,
  tabIndex = 0,
  required = false,
  selectAll,
  selectAllText,
}) => {
  const [showOptions, setShowOtions] = useState(false)

  const selectItemHandler = id => {
    selectItem(id)
  }

  const deselectItemHandler = (id, e) => {
    e.stopPropagation()
    deselectItem(id)
  }

  const isSelected = id => selectedItems.includes(id)

  return (
    <div className='input-select-multi-container'>
      <div
        className={classNames('input-select-multi-value-container', { 'has-values': selectedItems.length > 0 })}
        tabIndex={tabIndex}
        onBlur={() => setShowOtions(false)}
        title={items
          .filter(itm => isSelected(itm.id))
          .map(itm => itm.value)
          .join(', ')}
      >
        <div className={classNames('input-select-multi-value')} onClick={() => setShowOtions(!showOptions)}>
          {selectedItems.length > 0 && (
            <div className='input-select-multi-value-wrapper'>
              {items
                .filter(itm => isSelected(itm.id))
                .map(itm => (
                  <span
                    className='input-select-multi-value-content'
                    key={itm.id}
                    onClick={e => deselectItemHandler(itm.id, e)}
                    title={itm.value}
                  >
                    {itm.value}
                  </span>
                ))}
            </div>
          )}
          <div className='input-select-multi-value-arrow-wrapper'>
            <div className={classNames('input-select-multi-value-arrow', { flipped: showOptions })}></div>
          </div>
          {label && (
            <div className='input-select-multi-value-label'>
              {label}
              {required && '*'}
            </div>
          )}
        </div>
        {showOptions && (
          <div className='input-select-multi-options-container'>
            {selectAll && (
              <div
                key={'all'}
                className={classNames('input-select-multi-option', { selected: selectedItems.length === items.length })}
                onClick={selectAll}
              >
                <div>{selectAllText}</div>
                {selectedItems.length === items.length && <div>{/* <CheckMark /> */}</div>}
              </div>
            )}
            {items.map(itm => (
              <div
                key={itm.id}
                className={classNames('input-select-multi-option', { selected: isSelected(itm.id) })}
                onClick={() => selectItemHandler(itm.id)}
              >
                <div>{itm.value}</div>
                {isSelected(itm.id) && (
                  <div>
                    <CheckMark />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default InputSelectMulti
