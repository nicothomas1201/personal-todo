import styled from 'styled-components'
import Icon from './icons'
import { useDispatch, useSelector } from 'react-redux'
import { setAllTodos } from '../slices/todosSlice'
import Button from './Button'

const TodoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .check-text-container{
    display: flex;
    align-items: center;
    gap: 7px;

    .todo-text{
      font: var(--body-500);
      color: var(--black);
      text-decoration: ${({check}) => check ? 'line-through' : 'none'};
    }

    .checkbox{
      display: inline-flex;
      inline-size: 24px;
      block-size: 24px;
      border: 1px solid #828282;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      cursor: pointer;

      ${({check}) => {
        if(check){
          return `
              border-color: transparent;
              background-color: #2F80ED;
          `
        }

        return null
      }}
    }
  }

  
`

function Todo({ todo }) {
  const allTodos = useSelector(state => state.todos.allTodos)
  const view = useSelector( state => state.view.currentView)
  const dispatch = useDispatch()
  
  function handleClick(){
    const newCloneTodo = structuredClone(allTodos)
    const currentItemCheck = newCloneTodo.find((item) => item.id === todo.id)
    currentItemCheck.complete = !currentItemCheck.complete
    dispatch(setAllTodos(newCloneTodo))
  }

  function handleDeleteOne(){
    const id = todo.id
    const newAllTodos = allTodos.filter( todo => todo.id !== id)
    dispatch(setAllTodos(newAllTodos))
    

  }

  return (
    <TodoStyled check={todo.complete} >
      <div className='check-text-container'>
        <span onClick={handleClick} className='checkbox'>
          <Icon name="check"/>   
        </span>
        <span className='todo-text'>{todo.text}</span>
      </div>
      {view === 'completed' ? (
        <Button 
          onClick={handleDeleteOne}
          type="icon"
          icon={ <Icon name="trash" color="#BDBDBD" size="24" /> }
        />
      ) : null}
    </TodoStyled>
  )
}

export default Todo
