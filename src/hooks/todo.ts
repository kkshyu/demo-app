import { useCallback, useEffect, useState } from 'react'

export type TodoItem = {
  id: string
  title: string
  status: TodoStatus
}
export type TodoList = TodoItem[]

// fake data hook
export const useTodoList = () => {
  const [todoList, setTodoList] = useState<TodoList>([])
  const fetchTodoList = useCallback(() => {
    const data = localStorage.getItem('todoList')
    const parsedData: TodoList = data ? JSON.parse(data) : []
    setTodoList(parsedData)
  }, [])

  const addTodoItem = useCallback(
    (title: string, status: TodoStatus) => {
      const newTodoItem = {
        id: Date.now().toString(),
        title,
        status,
      }
      const newTodoList = [...todoList, newTodoItem]
      localStorage.setItem('todoList', JSON.stringify(newTodoList))
      setTodoList(newTodoList)
    },
    [todoList],
  )
  const removeTodoItem = useCallback(
    (todoItemId: string) => {
      const idx = todoList.findIndex(todoItem => todoItem.id === todoItemId)
      const newTodoList = [...todoList.slice(0, idx), ...todoList.slice(idx + 1)]
      localStorage.setItem('todoList', JSON.stringify(newTodoList))
      setTodoList(newTodoList)
    },
    [todoList],
  )

  useEffect(() => fetchTodoList(), [fetchTodoList])
  return {
    todoList,
    fetchTodoList,
    addTodoItem,
    removeTodoItem,
  }
}
