import { useAppDispatch, useAppSelector } from 'app/store/lib/hooks/hooks'
import styles from './ToDoWidget.module.scss'
import { ToDoControlPanel, ToDoItem, ToDoList } from 'features/todo'
import { DragEvent, useCallback, useMemo, useState } from 'react'
import { reorderTodos } from 'entities/todo/model/toDoSlice'

const ToDoWidget = () => {
  const dispatch = useAppDispatch()
  const { todos, filter } = useAppSelector((state) => state.todos)
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null)

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === 'all') return true
      if (filter === 'active') return !todo.completed
      if (filter === 'completed') return todo.completed
      return true
    })
  }, [todos, filter])

  const onDragStart = useCallback((index: number) => {
    setDraggedItemIndex(index)
  }, [])

  const onDrop = useCallback(() => {
    setDraggedItemIndex(null)
  }, [])

  const onDragOver = useCallback(
    (event: DragEvent<HTMLDivElement>, index: number) => {
      event.preventDefault()
      if (draggedItemIndex === index) return

      let items = filteredTodos.filter((_, idx) => idx !== draggedItemIndex)
      items.splice(index, 0, filteredTodos[draggedItemIndex ?? 0])

      dispatch(
        reorderTodos({
          startIndex: draggedItemIndex,
          endIndex: index,
        }),
      )

      setDraggedItemIndex(index)
    },
    [draggedItemIndex],
  )

  return (
    <div className={styles.globalBox}>
      <h1>TODO LIST</h1>
      <ToDoControlPanel />
      {!!filteredTodos.length && (
        <ToDoList>
          {filteredTodos.map((item, index) => (
            <ToDoItem
              data={item}
              key={item.id}
              index={index}
              onDragStart={onDragStart}
              onDrop={onDrop}
              onDragOver={onDragOver}
            />
          ))}
        </ToDoList>
      )}
    </div>
  )
}

export default ToDoWidget
