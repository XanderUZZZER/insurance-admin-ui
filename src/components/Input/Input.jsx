import './Input.scss'

const Input = ({ type = 'text', placeholder }) => {
  return (
    <div className='custom-input-container'>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input
