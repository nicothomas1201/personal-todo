import styled from 'styled-components'
import Input from './Input'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { setAllTodos } from '../slices/todosSlice'
import { setInputValue } from '../slices/inputSlice'

const InputContainerStyled = styled.form`
  display: flex;
  align-items: center;
  gap: 25px;
  padding-block-start: 18px;
  padding-block-end: 33px;
`

function InputContainer() {
  const allTodos = useSelector(state => state.todos.allTodos)
  const inputValue = useSelector(state => state.input.inputValue)
  const dispatch = useDispatch()

  function handleSubmit(e){
    e.preventDefault()
    const cloneAllTodos = structuredClone(allTodos)

    if(inputValue !== ''){
      let newTodo = {
        text: inputValue,
        complete: false
      }
  
      if(cloneAllTodos.length === 0){
        newTodo.id = 1
        cloneAllTodos.push(newTodo)
        console.log(cloneAllTodos)
      }
      else{
        newTodo.id = cloneAllTodos[cloneAllTodos.length - 1].id + 1
        cloneAllTodos.push(newTodo)
      }
  
      dispatch(setAllTodos(cloneAllTodos))
      dispatch(setInputValue(''))
    }

    
  }

  return (
    <InputContainerStyled onSubmit={handleSubmit}>
      <Input />
      <Button text="Add" />
    </InputContainerStyled>

  )
}

export default InputContainer
