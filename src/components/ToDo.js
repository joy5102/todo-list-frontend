import React from 'react'

import {AiFillDelete} from "react-icons/ai"

import {FaRegEdit} from "react-icons/fa"

const ToDo = ({text, updateMode, deleteToDo}) => {
  return (
    <div>
      <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
          <FaRegEdit className="icon" onClick={updateMode}/>
          <AiFillDelete className="icon" onClick={deleteToDo}/>
        </div>
      </div>
    </div>
  )
}

export default ToDo
