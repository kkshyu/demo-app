import { ListIcon, ListItem } from '@chakra-ui/core'
import React from 'react'
import { getIconFromTodoStatus } from '../../utils'

type TodoItemProps = {
  status: TodoStatus
  onRemove?: () => void
}
const TodoItem: React.FC<TodoItemProps> = ({ children, status, onRemove }) => {
  return (
    <ListItem>
      <ListIcon icon="close" color="black.500" onClick={() => onRemove && onRemove()} />
      <ListIcon icon={getIconFromTodoStatus(status)} color="green.500" />
      {children}
    </ListItem>
  )
}

export default TodoItem
