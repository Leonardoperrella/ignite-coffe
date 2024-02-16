import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 2rem ;
  padding-bottom: 2rem ;

`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .6rem
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme['purple-light']};

  padding: .5rem;
  border-radius: 6px ;

  p {
    font-size: 12px;
  }
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;

  background: ${(props) => props.theme['yellow-light']};


  padding: .5rem;
  border-radius: 6px ;
`