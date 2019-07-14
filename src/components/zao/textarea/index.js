import React, {useState, useContext, useEffect} from 'react'
const StateContext = React.createContext({})

const A = ()=> {
  const stateContextValue = useContext(StateContext)
  const {state, setState} = stateContextValue
  const {value, props} = state
  const {type, maxLength, onChange, ...otherProps} = props
  function handler (e) {
    const str = e.target.value
    if (str.length <= maxLength) {
      if (str.includes('\n')) {
        return
      }
      onChange && onChange(str)
      setState((state) => {
        // 这块内部为何无法获得引用？
        const {value} = state
        return {...state, value: str}
      })
    }
  }
  return <textarea {...otherProps} value={value} onChange={handler} className={`zao-components-textarea`} />
}

const B = ({className}) => {
  const stateContextValue = useContext(StateContext)
  const {state} = stateContextValue
  const {value, props} = state
  const {maxLength} = props
  return <span className={className}>
    {value.length}/{maxLength}
  </span>
}

Textarea.TextareaInput = A
Textarea.WordsCount = B

export default function Textarea (props) {
  const [state, setState] = useState({
    value: '',
    props: {}
  })
  useEffect(() => {
    setState((state) => {
      return {...state, props: props}
    })
  }, [props])
  return <StateContext.Provider value={{state, setState}}>
    <div>
      {props.children}
    </div>
  </StateContext.Provider>
}
