import { createSlice } from '@reduxjs/toolkit'
import { toDoSliceState } from './types'

const initialState: toDoSliceState = {
  todos: [],
  filter: 'all',
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      })
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    changeTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id)
      if (todo) {
        todo.text = action.payload.text
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    reorderTodos: (state, action) => {
      const { startIndex, endIndex } = action.payload
      const [removed] = state.todos.splice(startIndex, 1)
      state.todos.splice(endIndex, 0, removed)
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo, setFilter, changeTodo, reorderTodos } =
  todosSlice.actions

export default todosSlice.reducer
