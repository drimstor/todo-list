import { ITodo } from 'entities/todo/model/types'
import { DragEvent } from 'react'

export interface ToDoItemProps {
  data: ITodo
  onDragStart: (index: number) => void
  onDragOver: (event: DragEvent<HTMLDivElement>, index: number) => void
  onDrop: () => void
  index: number
}
