export interface ITodo {
  id: number
  text: string
  completed: boolean
}

export type TypeFilter = 'all' | 'active' | 'completed'

export interface toDoSliceState {
  todos: ITodo[]
  filter: TypeFilter
}
