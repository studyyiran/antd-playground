import React from 'react'
import './index.scss'

export default function Footer(props) {
  const {type, style={}, children, className} = props
  let defaultStyle = {
    position: 'fixed'
  }
  if (type) {
    defaultStyle.position = type
  }
  return <div style={Object.assign({}, defaultStyle, style)} className={`${className ? className : ''} zao-components-footer`}>
    {children}
  </div>
}
