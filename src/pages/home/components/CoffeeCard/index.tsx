import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CoffeeCardContainer,
  CoffeeCategories,
  CoffeeQuantityInput,
  FormContainer,
  TextContainer,
} from './styles'
import { useState } from 'react'

interface CoffeeProps {
  image: string
  alt: string
  categories: string[]
  coffeeName: string
  coffeeDescription: string
  price: string
}

export function CoffeeCard({
  image,
  alt,
  categories,
  coffeeName,
  coffeeDescription,
  price,
}: CoffeeProps) {
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
    <CoffeeCardContainer>
      <div>
        <img src={image} alt={alt} />
        <CoffeeCategories>
          {categories.map((category) => {
            return <span key={category}>{category}</span>
          })}
        </CoffeeCategories>
      </div>
      <TextContainer>
        <h1>{coffeeName}</h1>
        <p>{coffeeDescription}</p>
      </TextContainer>

      <FormContainer action="">
        <label>
          R$ <strong>{price}</strong>
        </label>
        <CoffeeQuantityInput>
          <button type="button" onClick={handleDecreaseCofffeeQuantity}>
            <Minus weight="bold" size={14} />
          </button>
          <input type="number" value={coffeeQuantity} />
          <button type="button" onClick={handleIncreaseCofffeeQuantity}>
            <Plus weight="bold" size={14} />
          </button>
        </CoffeeQuantityInput>
        <span>
          <ShoppingCart weight="fill" size={20} />
        </span>
      </FormContainer>
    </CoffeeCardContainer>
  )
}
