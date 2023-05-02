import styled from 'styled-components'
import Todo from './Todo'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAllTodos, setCurrentTodos } from '../slices/todosSlice'
import Button from './Button'
import Icon from './icons'

const TodosMainStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;

  .none{
    font: var(--body-500);
  }
`

function TodosMain() {
  const allTodos = useSelector( state => state.todos.allTodos)
  const view = useSelector(state => state.view.currentView)
  const currentTodos = useSelector(state => state.todos.currentTodos)
  const completedTodos = useSelector( state => state.todos.allTodos.filter( todo => todo.complete === true))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentTodos(allTodos))
    if(view === 'active'){
      const activeTodos = allTodos.filter( todo => todo.complete === false)
      dispatch(setCurrentTodos(activeTodos))
    } else if(view === 'all'){
      dispatch(setCurrentTodos(allTodos))
    } else if(view === 'completed'){
      dispatch(setCurrentTodos(completedTodos))
    }
  }, [view, allTodos])

  function handleDeleteAllComplete(){
    const newAllTodos = allTodos.filter(todo => todo.complete === false)
    dispatch(setAllTodos(newAllTodos))

  }

  return (
    <TodosMainStyled>
      {currentTodos.length !== 0 ? currentTodos.map( (todo, index ) => {
        return <Todo key={index} todo={todo} />
      }) : <span className='none'>No tines nada por hacer</span> }
      {view === 'completed' && currentTodos.length !== 0 ? <Button
        onClick={handleDeleteAllComplete}
        type="delete"
        text="delete all"
        icon={<Icon name="trash" size="12" color="#ffffff" />}
      /> : null }
    </TodosMainStyled>
    
  )
}

export default TodosMain
