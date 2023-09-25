import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`
const BaseNavContainer = styled.div`
  height: 2.375rem;
  border-radius: 6px;
  padding: 0.5rem;
`

export const LocaleContainer = styled(BaseNavContainer)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const CartContainer = styled(BaseNavContainer)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`
