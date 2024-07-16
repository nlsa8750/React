import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
// import './App.css'


function App() {

  // todos is an array consists of objects which contain 3 properties
  const [todos, setTodos] = useState([])

  //...prev = spread operator to include all the properties of the previous (object)
  // here todo is an object

  // new object is created inside the array by the name todo which is spreaded by including all the elements of todos,  where only id is added with new number , else todo's and complete's value are as same as prev state elements . Array will contains the number of objects.


  // addtodo simple = todos leta hun, prev ko extract karta hun, phir prev ko spread kardi hai saari ki saari , id ko change kiya aur baaki ko as it is spread kar diya hai 

//  todo object => todo message and completed , 2 keys 
  const addTodo = (todo) => {
    
    setTodos((prev) => [{ id: Date.now() , ...todo}, ...prev])
  }

  // to update the todos , we need the id and todo inside todos properties which is inside the ToDoContext const
  // to find the id = we need to have access of the previous elements , so we started searching it using map(prev.map)
  // once we find that id inside that previously accessed elements, we simply update the todo coming from the argument, if not , then remain same

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))


  }

  // to delete the particular to-do list > we need to have access of all previous elements of an array.
  // if it doesn't exist > id will not match to the individual todos and nothing will be filtered out.
  // filter will work on the condition if when id is encountered , that id will be filtered out.

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachtodo) => eachtodo.id !== id))
  }



  // if we click on the button stating the work is completed, the id will be fetched and passed as an argument
  // if we want to override on the completed task, we simply find the individual todo from the map
  // once we find it, that whole individual object will be crossed out using the function mentioned below, else remain the same.


  const toggleComplete = (id) => {
    // console.log(id);
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? {
          ...prevTodo,
          completed: !prevTodo.completed
        } : prevTodo))
  }


  // local storage can only store string data, json format is used for human to comprehend the complex data in a structured manner, and json format can be easily serialised and deserialised into string 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  // to do provider allows to give access of the created context properties / variables to the current file.

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div 
      className="bg-[#4c0519] min-h-screen py-8" 
      style={{ backgroundImage: "url('https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg')" }}
    >
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Track your TO-DO List</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">

            {/*Loop and Add TodoItem here => single todos object will be retrieve via loop and on that single loop , it will use todoitem.jsx*/}
            {/* instead of using curly brackets, you can use parenthesis in arrow function which helps you to auto return */}


            {todos.map((todo) => (

              // div can be repeated, so to identify unique div, we use keys

              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
