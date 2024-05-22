import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todosSlice from 'entities/todo/model/toDoSlice'
import saveToLocalStorage from './lib/helpers/saveToLocalStorage'
import loadFromLocalStorage from './lib/helpers/loadFromLocalStorage'

const persistedState = loadFromLocalStorage()

export const rootReducer = combineReducers({
  todos: todosSlice,
})

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
})

store.subscribe(() => {
  saveToLocalStorage(store.getState() as RootState)
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store }
