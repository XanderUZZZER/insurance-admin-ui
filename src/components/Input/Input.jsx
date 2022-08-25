import React from 'react'

const Input = ({ type = 'text', placeholder }) => {
  return <input type={type} placeholder={placeholder} />
}

export default Input
