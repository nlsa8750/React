import { createSlice, nanoid } from "@reduxjs/toolkit";

// nano id for just unique id generation

const initialState = {
    todos:[{
        id:1,
        text:'Hello World'
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState, 
    reducers: { 
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload 
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // updateTodo: (state, action) => {
        //     const {id, text} = action.payload;        
        //     state.todos = state.todos.find((todo) => todo.id === id)
        //      if(todo) todo.text = text;
        // }
    }
})
// for component
export const {addTodo, removeTodo} = todoSlice.actions

// for store
export default todoSlice.reducer