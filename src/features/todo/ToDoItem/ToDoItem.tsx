import Checkbox from 'shared/ui/checkbox/Checkbox/Checkbox'
import styles from './ToDoItem.module.scss'
import IconButton from 'shared/ui/buttons/IconButton/IconButton'
import { faCircleCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { changeTodo, deleteTodo, toggleTodo } from 'entities/todo/model/toDoSlice'
import { useAppDispatch } from 'app/store/lib/hooks/hooks'
import { ChangeEvent, DragEvent, memo, useCallback, useState } from 'react'
import clsx from 'clsx'
import { ITodo } from 'entities/todo/model/types'

interface IToDoItem {
  data: ITodo
  onDragStart: (index: number) => void
  onDragOver: (event: DragEvent<HTMLDivElement>, index: number) => void
  onDrop: () => void
  index: number
}

const ToDoItem = ({ data, onDragStart, onDragOver, onDrop, index }: IToDoItem) => {
  const dispatch = useAppDispatch()
  const [textValue, setTextValue] = useState(data.text)
  const [isEditMode, setIsEditMode] = useState(false)

  const onChangeCheckbox = useCallback(() => {
    dispatch(toggleTodo(data.id))
  }, [])

  const onClickRemove = useCallback(() => {
    dispatch(deleteTodo(data.id))
  }, [])

  const onChangeEditInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value)
  }

  const onClickEdit = useCallback(() => {
    setIsEditMode(!isEditMode)

    if (isEditMode) {
      dispatch(changeTodo({ id: data.id, text: textValue }))
    }
  }, [isEditMode, data.id, textValue])

  return (
    <div
      className={clsx(styles.globalBox)}
      onDragStart={() => onDragStart(index)}
      onDragOver={(event) => onDragOver(event, index)}
      onDrop={onDrop}
      draggable
    >
      <Checkbox state={data.completed} onChange={onChangeCheckbox} />
      <p>
        {isEditMode ? (
          <input className={styles.editInput} value={textValue} onChange={onChangeEditInput} />
        ) : (
          textValue
        )}
      </p>
      <div className={styles.iconsBox}>
        <IconButton icon={isEditMode ? faCircleCheck : faPen} onClick={onClickEdit} />
        <IconButton icon={faTrash} onClick={onClickRemove} />
      </div>
    </div>
  )
}

export default memo(ToDoItem)
