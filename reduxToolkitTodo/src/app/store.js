import {configureStore} from '@reduxjs/toolkit'
// go through this again
import { todoSlice } from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoSlice.reducer
}) 