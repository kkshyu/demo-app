export const getIconFromTodoStatus = (status: TodoStatus) => {
  switch (status) {
    case 'TODO':
      return 'time'
    case 'DOING':
      return 'spinner'
    case 'DONE':
      return 'check'
    default:
      return 'close'
  }
}
