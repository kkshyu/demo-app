import { List } from '@chakra-ui/core'
import React from 'react'
import TodoInput from '../components/todo/TodoInput'
import TodoItem from '../components/todo/TodoItem'
import { useTodoList } from '../hooks/todo'

const HomePage: React.FC = () => {
  const { todoList, addTodoItem, removeTodoItem } = useTodoList()
  return (
    <div>
      <TodoInput onSubmit={title => addTodoItem(title, 'TODO')} />
      <List>
        {todoList.map((todoItem, idx) => (
          <TodoItem
            key={idx}
            status={todoItem.status}
            onRemove={() => {
              removeTodoItem(todoItem.id)
            }}
          >
            {todoItem.title}
          </TodoItem>
        ))}
      </List>
    </div>
  )
}

export default HomePage
