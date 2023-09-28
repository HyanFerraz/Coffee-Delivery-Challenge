import styled from 'styled-components'
import { Button } from '../../pages/checkout/styles'

export const CartCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const RemoveButton = styled.button`
  ${Button}
  max-height: 2.375rem;
  padding: 0.5rem;
  gap: 0.25rem;
`
