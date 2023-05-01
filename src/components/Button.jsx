import styled from 'styled-components'

const ButtonStyled = styled.button`
  box-shadow: 0px 2px 6px 0px #7FB1F366;
  background-color: #2F80ED;
  color: #FFFFFF;
  font: var(--body-600);
  padding: 20px 40px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
`

const ButtonIcon = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const ButtonDelete = styled(ButtonStyled)`
  background-color: #EB5757;
  color: #ffff;
  display: flex;
  align-items: center;
  gap: 6px;
  align-self: end;
`


function Button({ onClick, type, icon, text }) {

  switch(type){
    case 'icon': {
      return <ButtonIcon onClick={onClick}>
        {icon}
      </ButtonIcon>
    }

    case 'delete': {
      return <ButtonDelete onClick={onClick}>
        {icon}
        {text}
      </ButtonDelete>

    }
    default: {
      
      return (
        <ButtonStyled onClick={onClick}>
          {text}
        </ButtonStyled>
      )
    }
  }
  
}

export default Button
