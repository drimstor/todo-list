import { RootState } from 'app/store/store'

const saveToLocalStorage = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('todos', serializedState)
  } catch (e) {
    console.error(e)
  }
}

export default saveToLocalStorage
