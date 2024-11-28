import React, { useState } from 'react'

const TodoInput = (props) => {
    const {handleaddtodo,settoDoValue,toDoValue}=props
  return (
    <header>
        <input
        value={toDoValue}
        onChange={(e)=>{
            settoDoValue(e.target.value)
        }}
         placeholder='Enter todo....'/>
        <button onClick={()=>{
            handleaddtodo(toDoValue)
            settoDoValue('')
        }}>Add </button>
    </header>
  )
}

export default TodoInput