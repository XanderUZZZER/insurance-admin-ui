import Input from '../Common/Input/Input'
import './InputSearch.scss'

const InputSearch = ({
  value,
  placeholder = 'Search',
  onChange = () => {},
  onSearch,
  submitPlaceholder = 'Search',
  disabled = false,
}) => {
  return (
    <div className='custom-input-search-container'>
      <Input placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} />
      {onSearch && (
        <button onClick={onSearch} disabled={disabled}>
          {submitPlaceholder}
        </button>
      )}
    </div>
  )
}

export default InputSearch
