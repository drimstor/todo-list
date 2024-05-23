import { ITodo } from 'entities/todo/model/types'

export interface TypeFilterMap {
  [key: string]: (todo: ITodo) => boolean
}
