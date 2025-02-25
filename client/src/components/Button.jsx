import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'

const Button = ({type,title,customStyles,handleClick}) => {
    const snap = useSnapshot(state)

    const generateStyle = (type) => {
        if(type === 'filled'){
            return {
                backgroundColor:snap.color,
                color:'#fff'
            }
        }
    }
  return (
    <button onClick={handleClick} className={`cursor-pointer px-8 py-1.5 flex-1 rounded-2xl ${customStyles}`} style={generateStyle(type)}>
        {title}
    </button>
  )
}

export default Button