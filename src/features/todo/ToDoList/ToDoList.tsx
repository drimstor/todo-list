import { ReactNode } from 'react'
import styles from './ToDoList.module.scss'

interface IToDoList {
  children: ReactNode
}

const ToDoList = ({ children }: IToDoList) => {
  return <div className={styles.globalBox}>{children}</div>
}

export default ToDoList
