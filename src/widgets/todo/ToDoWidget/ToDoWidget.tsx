import { useAppSelector } from 'app/store/lib/hooks/hooks'
import { ToDoControlPanel, ToDoItem, ToDoList } from 'features/todo'
import { useMemo } from 'react'
import { TypeFilterMap } from './model/types'
import useDragAndDrop from './lib/hooks/useDragAndDrop'
import styles from './ToDoWidget.module.scss'

const ToDoWidget = () => {
  const { todos, filter } = useAppSelector((state) => state.todos)
  const { onDragStart, onDrop, onDragOver } = useDragAndDrop()

  const filteredTodos = useMemo(() => {
    const filterMap: TypeFilterMap = {
      all: () => true,
      active: (todo) => !todo.completed,
      completed: (todo) => todo.completed,
    }

    return todos.filter(filterMap[filter])
  }, [todos, filter])

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
