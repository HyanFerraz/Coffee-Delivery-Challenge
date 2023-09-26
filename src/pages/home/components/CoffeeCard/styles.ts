import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  max-width: 16rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    img {
      margin-top: -2.75rem;
    }
  }
`

export const CoffeeCategories = styled.section`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  span {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    font-size: 0.625rem;
    font-weight: 700;
  }
`

export const TextContainer = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    margin: 0;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const FormContainer = styled.form`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.375rem;
    height: 2.375rem;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
    cursor: pointer;
  }
`

export const CoffeeQuantityInput = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  width: 4.5rem;
  height: 2.375rem;
  margin: 0;
  padding: 0;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: none;
    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }

  input {
    width: 30%;
    height: 100%;
    border-radius: 6px;
    border: none;
    background-color: ${(props) => props.theme['base-button']};
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
