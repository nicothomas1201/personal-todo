import styled from 'styled-components'
import { setCurrentView } from '../slices/viewSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setHeaderList } from '../slices/headerListSlice'

const HeaderTodoStyled = styled.div`
  inline-size: 100%;
  border-block-end: 1px solid #BDBDBD;
  
  .list{
    position: relative;
    margin: 0;
    padding: 0;
    font: var(--body-600);
    list-style: none;
    display: flex;
    gap: 32px;
    padding-inline: 32px;
    justify-content: space-between;
  }

  .list li{
    display: inline-block;
    text-align: center;
    inline-size: 89px;
    cursor: pointer;
    padding-block-end: 15px;
  } 

  .list li.active{
    border-block-end: 4px solid #2F80ED;
  }
`

function HeaderTodo() {
  const dispatch = useDispatch()
  const headerList = useSelector( state => state.headerList.headerList)

  function handleClick(e){
    const newClone = structuredClone(headerList)
    const pastActive = newClone.find((item) => item.class )
    pastActive.class = ''
    const currentActive = newClone.find((item) => item.name === e.currentTarget.textContent)
    currentActive.class = 'active'
    dispatch(setHeaderList(newClone))
    dispatch(setCurrentView(currentActive.name.toLocaleLowerCase()))
  }

  return (
    <HeaderTodoStyled>
      <ul className='list'>
        {headerList.map((item, index) => {
          return <li onClick={handleClick} className={item.class} key={index}>{item.name}</li>
        })}
      </ul>
    </HeaderTodoStyled>
    
  )
}

export default HeaderTodo
