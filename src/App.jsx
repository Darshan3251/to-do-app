import { useState ,useEffect} from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
function App() {
  let [todos,setTodos]=useState([])

  const [toDoValue, settoDoValue] = useState("")

  function pasistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }

  function handleaddtodo(newtodo){
    const newTodoList=[...todos,newtodo]
    pasistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodos=todos.filter((todo,todoIndex)=>{
    return  todoIndex !== index
    })
    pasistData(newTodos)
    setTodos(newTodos)
  }

  function handleEdittodo(index){
    const editedTodo= todos[index]
    settoDoValue(editedTodo)
    handleDeleteTodo(index)
  }

  //localstorage
  useEffect(() => {
    if(!localStorage){
      return
    }
    let localTodos=localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos=JSON.parse(localTodos).todos
      setTodos(localTodos)
    
  }, [])
  

  return (
    <>
    <TodoInput toDoValue={toDoValue} settoDoValue={settoDoValue} handleaddtodo={handleaddtodo}  />
    <TodoList handleEdittodo={handleEdittodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
