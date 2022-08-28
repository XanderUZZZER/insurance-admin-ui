import './Input.scss'

const Input = ({ value, type = 'text', placeholder, onChange = () => {}, disabled = false }) => {
  const onChangeHandler = e => {
    e.preventDefault()
    onChange(e.target.value)
  }

  return (
    <div className='custom-input-container'>
      <input type={type} placeholder={placeholder} value={value} onChange={onChangeHandler} disabled={disabled} />
    </div>
  )
}

export default Input
