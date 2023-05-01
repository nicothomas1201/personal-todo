import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setInputValue } from '../slices/inputSlice'

const InputStyled = styled.input`
  font: var(--body-400);
  color: var(--gray);
  border: 1px solid #BDBDBD;
  border-radius: 12px;
  block-size: 56px;
  max-inline-size: 476px;
  inline-size: 100%;
  box-sizing: border-box;
  padding-inline: 12px;
`

function Input() {
  const inputValue = useSelector(state => state.input.inputValue)
  const dispatch = useDispatch()  
  return (
    <InputStyled 
      placeholder='add details'
      value={inputValue}
      onChange={(e) => dispatch(setInputValue(e.currentTarget.value))} 
    />
    
  )
}

export default Input
