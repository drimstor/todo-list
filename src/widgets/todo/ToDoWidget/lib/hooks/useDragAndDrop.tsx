import { useAppSelector } from 'app/store/lib/hooks/hooks'
import { reorderTodos } from 'entities/todo/model/toDoSlice'
import { useState, useCallback, DragEvent } from 'react'
import { useDispatch } from 'react-redux'

const useDragAndDrop = () => {
  const dispatch = useDispatch()
  const todos = useAppSelector((state) => state.todos.todos)
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null)

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

      let items = todos.filter((_, idx) => idx !== draggedItemIndex)
      items.splice(index, 0, todos[draggedItemIndex ?? 0])

      dispatch(
        reorderTodos({
          startIndex: draggedItemIndex!,
          endIndex: index,
        }),
      )

      setDraggedItemIndex(index)
    },
    [draggedItemIndex, dispatch],
  )

  return {
    onDragStart,
    onDrop,
    onDragOver,
  }
}

export default useDragAndDrop
