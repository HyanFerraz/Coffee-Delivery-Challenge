import { Trash } from 'phosphor-react'
import { coffeeList } from '../../repository/coffeeList'
import { QuantityInput } from '../QuantityInput'
import { CartCardContainer, RemoveButton } from './styles'

export function CartCard() {
  return (
    <CartCardContainer>
      <img src={coffeeList[0].image} alt="" />
      <div>
        <p>Expresso Tradicional</p>
        <section>
          <QuantityInput />
          <RemoveButton>
            <Trash />
            Remover
          </RemoveButton>
        </section>
      </div>
      <strong>
        R${Math.floor(coffeeList[0].price * 1)},
        {Math.floor((coffeeList[0].price % 1) * 100)}
      </strong>
    </CartCardContainer>
  )
}
