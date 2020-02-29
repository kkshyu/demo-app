import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/core'
import React, { useState } from 'react'

type TodoInputProps = {
  onSubmit?: (title: string) => void
}
const TodoInput: React.FC<TodoInputProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('')
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => setValue(e.currentTarget.value)

  return (
    <InputGroup>
      <Input value={value} onChange={handleInputChange} type="text" placeholder="我等等要做..." />
      <InputRightElement width="4.5rem">
        <Button isDisabled={!value} h="1.75rem" size="sm" onClick={() => onSubmit && onSubmit(value)}>
          送出
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default TodoInput
