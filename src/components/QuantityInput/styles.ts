import styled from 'styled-components'

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

  button:hover {
    color: ${(props) => props.theme['purple-dark']};
  }

  button:focus {
    outline: 0;
    box-shadow: 0 0 0 0;
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
