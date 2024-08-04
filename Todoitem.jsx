import React from 'react'

const Todoitem = ({todo,OnDelete}) => {
  return (
    
      <div>
        <h4>
          {todo.title}
      

        </h4>
        <p>{todo.desc}</p>
        <button className='btn btn-sm btn-danger' onClick={()=>{OnDelete(todo)}}>Delete</button>
        
      </div>


    
  )
}

export default Todoitem
