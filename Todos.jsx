import React from 'react'
import Todoitem from './Todoitem'
const Todos = (props) => {
  let mystyle={
    minheight:'10vh',
    margin:'50px auto'
  }
  return (
    <>
      <div className='container'style={mystyle} >
    <h3>Todos List</h3>
      

      

      
     {props.todos.length===0? "No todos to display": props.todos.map((todo)=>{
             
        return( <><Todoitem todo={todo} key={todo.sno}OnDelete={props.OnDelete}/> <hr/></>)
      }) } 
  
    
    
      </div>
    </>
    )
}


export default Todos;
