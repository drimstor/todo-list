import Input from 'shared/ui/inputs/Input/Input'
import styles from './ToDoControlPanel.module.scss'
import Button from 'shared/ui/buttons/Button/Button'
import { faList } from '@fortawesome/free-solid-svg-icons'
import Select from 'shared/ui/select/Select/Select'
import { FormEvent, memo, useCallback, useState } from 'react'
import { addTodo, setFilter } from 'entities/todo/model/toDoSlice'
import { useAppDispatch } from 'app/store/lib/hooks/hooks'
import { filterList } from './lib/const'

const ToDoControlPanel = () => {
  const dispatch = useAppDispatch()

  const onChangeFilter = useCallback((item: string) => {
    dispatch(setFilter(item))
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as typeof event.target & { todoInput: { value: string } }
    const inputValue = target.todoInput.value.trim()

    if (!!inputValue) {
      dispatch(addTodo(inputValue))
      target.todoInput.value = ''
    }
  }

  return (
    <form className={styles.globalBox} onSubmit={handleSubmit}>
      <Input name={'todoInput'} icon={faList} placeholder='Введите текст' />
      <Button variant='contained' size='medium' typeSubmit>
        Добавить
      </Button>
      <Select ul={filterList} onChange={onChangeFilter} />
    </form>
  )
}

export default memo(ToDoControlPanel)
