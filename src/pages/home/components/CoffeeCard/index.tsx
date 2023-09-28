import { ShoppingCart } from 'phosphor-react'
import {
  CoffeeCardContainer,
  CoffeeCategories,
  FormContainer,
  TextContainer,
} from './styles'
import { QuantityInput } from '../../../../components/QuantityInput'

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
        <QuantityInput />
        <span>
          <ShoppingCart weight="fill" size={20} />
        </span>
      </FormContainer>
    </CoffeeCardContainer>
  )
}
