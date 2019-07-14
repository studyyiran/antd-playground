import React, {useState, useEffect} from 'react'
import moment from 'moment'

export default function () {
  const [value, setValue] = useState('')
  console.log('enter')
  useEffect(() => {
    console.log('enter2')
    console.log(moment(String(123)).isSame(String(Date.now()), 'day'))
    setValue()
  }, [])
  return value
}