import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-orange-500 text-white p-2 mt-3 rounded'>
        <p className='font-semibold text-xs uppercase'>{props.text}</p>
    </button>
  )
}

export default Button