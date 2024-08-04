import Header from './Components/Header'
  import Footer from './Components/Footer'
  import {useState,useEffect} from 'react'
  import About from './Components/About'
  import AddTodo from './Components/AddTodo'
  import Todos from './Components/Todos'
  
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'





  
  const App = () => {
    let initTodo;
    if(localStorage.getItem("todos")===null){
        initTodo=[];
    }
    else{
      initTodo=JSON.parse(localStorage.getItem("todos"))
    }
    const OnDelete=(todo)=>{
      
      console.log("You are going to be deleted",todo);

      setTodos(todos.filter((e)=>{
        return e!==todo;
      }))
    localStorage.setItem("todos",JSON.stringify(todos))
    }

    const addTodo= (title,desc)=>{
      console.log("I am going to the=",title,desc)
      let sno;
      if(todos.length==0){
        sno=0
      }
      else{
      let sno=todos[todos.length-1].sno + 1
      }
      const mytodos={
        sno:sno,
        title:title,
        desc:desc
      }
      console.log(mytodos)
      setTodos([...todos,mytodos])
    
    }
     const [todos,setTodos]=useState(initTodo);
     
     useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
  
     }, [todos])

    
      
  
    
     
    return (
   <>
   <Router>
   
   <Header title="My Todos List" searchBar={false}/>
    <Routes>
        <Route exact path="/" render={()=>{
          return(
            <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} OnDelete={OnDelete}/> 
            </>
          )
        }}/>
      
      <Route exact path="/about" element={<About/>}/>
      </Routes> 
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} OnDelete={OnDelete}/> 

     
           
        





    
 

     <Footer/>
      </Router>
      </>
    
    
 
 )
}
            
        
export default App;

