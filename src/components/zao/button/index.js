import React from 'react'
import './index.scss'

export default function Button (props) {
  const {
    children,
    className,
    ...otherProps
  } = props
  let disabledStyle = {
    backgroundColor: '#DDDDDD',
    boxShadow: 'none'
}
  if (otherProps.disabled) {
    otherProps.style = Object.assign({}, disabledStyle, otherProps.style)
  }
  return <button {...otherProps} className={`${className ? className : ''} zao-components-button`}>
    {children}
  </button>
}
