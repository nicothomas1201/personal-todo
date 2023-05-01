import styled from 'styled-components'

const WrapperStyled = styled.div`
  max-inline-size: 608px;
  margin: auto;
  inline-size: 100%;
`

function Wrapper({ children }) {
  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
    
  )
}

export default Wrapper
