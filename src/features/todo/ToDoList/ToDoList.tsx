import { ToDoListProps } from './model/types'
import styles from './ToDoList.module.scss'

const ToDoList = ({ children }: ToDoListProps) => {
  return <div className={styles.globalBox}>{children}</div>
}

export default ToDoList
