import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TypeFilter, toDoSliceState } from './types'

const initialState: toDoSliceState = {
  todos: [],
  filter: 'all',
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      })
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    changeTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id)
      if (todo) {
        todo.text = action.payload.text
      }
    },
    setFilter: (state, action: PayloadAction<TypeFilter>) => {
      state.filter = action.payload
    },
    reorderTodos: (state, action: PayloadAction<{ startIndex: number; endIndex: number }>) => {
      const { startIndex, endIndex } = action.payload
      const [removed] = state.todos.splice(startIndex, 1)
      state.todos.splice(endIndex, 0, removed)
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo, setFilter, changeTodo, reorderTodos } =
  todosSlice.actions

export default todosSlice.reducer
