import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  padding: 2.5rem 10rem;
  margin: auto;
  display: flex;
  gap: 2rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const PaymentContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 0.75rem;
`

const Card = styled.div<{ $iconColor?: string }>`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  span {
    color: ${(props) => props.theme[props.$iconColor ?? 'yellow']};
  }

  section {
    display: flex;
    gap: 0.5rem;

    h2 {
      font-weight: 400;
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-weight: 400;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
export const AddressCard = styled(Card)`
  width: 640px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      gap: 0.75rem;
    }
  }
`

const AddressInput = css`
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  padding: 0.75rem;
`

export const TextInput = styled.input<{
  $size?: string
  $flex?: number
}>`
  ${AddressInput}
  max-width: ${(props) => props.$size};
  flex: ${(props) => props.$flex};
  color: ${(props) => props.theme['base-text']};

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
  }
`
export const UfInput = styled.select`
  ${AddressInput}
`

export const PaymentCard = styled(Card)`
  width: 640px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const PaymentButtons = styled.section`
  display: flex;
  gap: 0.75rem;

  input[type='radio'] {
    display: none;
  }
`
export const Button = css`
  flex: 1;
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${(props) => props.theme['base-text']};
  line-height: 160%;
  background-color: ${(props) => props.theme['base-button']};
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const PaymentButton = styled.label`
  ${Button}
  padding: 1rem;
  gap: 0.75rem;
  font-size: 0.75rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const CartContainer = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 0.75rem;
`

export const Separator = styled.div`
  content: '';
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const CardWrapper = styled(Card)`
  width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
