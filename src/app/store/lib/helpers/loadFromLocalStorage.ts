const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('todos')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.error(e)
    return undefined
  }
}

export default loadFromLocalStorage
