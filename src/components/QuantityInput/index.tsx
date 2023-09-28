import { useState } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { CoffeeQuantityInput } from './styles'

export function QuantityInput() {
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  function handleIncreaseCofffeeQuantity() {
    setCoffeeQuantity((state) => {
      return state + 1
    })
  }
  function handleDecreaseCofffeeQuantity() {
    setCoffeeQuantity((state) => {
      if (state > 1) {
        return state - 1
      } else {
        return state
      }
    })
  }

  return (
    <CoffeeQuantityInput>
      <button type="button" onClick={handleDecreaseCofffeeQuantity}>
        <Minus weight="bold" size={14} />
      </button>
      <input type="number" value={coffeeQuantity} />
      <button type="button" onClick={handleIncreaseCofffeeQuantity}>
        <Plus weight="bold" size={14} />
      </button>
    </CoffeeQuantityInput>
  )
}
