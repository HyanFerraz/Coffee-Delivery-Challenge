import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { ufList } from '../../repository/ufList'
import {
  AddressCard,
  PaymentContainer,
  CartContainer,
  CheckoutContainer,
  TextInput,
  UfInput,
  PaymentCard,
  PaymentButton,
  PaymentButtons,
  Separator,
  CardWrapper,
} from './styles'
import { CartCard } from '../../components/CartCard/Index'

export function Checkout() {
  return (
    <CheckoutContainer>
      <PaymentContainer>
        <h1>Complete seu pedido</h1>
        <AddressCard $iconColor="yellow-dark">
          <section>
            <span>
              <MapPinLine size={22} />
            </span>
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </section>
          <form action="">
            <TextInput placeholder="CEP" $size="12.5rem" />
            <TextInput placeholder="Rua" $size="35rem" />
            <div>
              <TextInput placeholder="Número" $size="12.5rem" />
              <TextInput placeholder="Complemento" $flex={1} />
            </div>
            <div>
              <TextInput placeholder="Bairro" $size="12.5rem" />
              <TextInput placeholder="Cidade" $flex={1} />
              <UfInput placeholder="UF">
                {ufList.map((uf) => {
                  return (
                    <option value={uf.name} key={uf.acronym}>
                      {uf.acronym}
                    </option>
                  )
                })}
              </UfInput>
            </div>
          </form>
        </AddressCard>
        <PaymentCard $iconColor="purple">
          <section>
            <span>
              <CurrencyDollar size={22} />
            </span>
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </section>
          <PaymentButtons>
            <PaymentButton htmlFor="credito">
              <span>
                <CreditCard size={22} />
              </span>
              CARTÃO DE CRÉDITO
              <input type="radio" id="credito" name="paymentMethod" />
            </PaymentButton>
            <PaymentButton htmlFor="debito">
              <span>
                <Bank size={22} />
              </span>
              CARTÃO DE DÉBITO
              <input type="radio" id="debito" name="paymentMethod" />
            </PaymentButton>

            <PaymentButton htmlFor="dinheiro">
              <span>
                <Money size={22} />
              </span>
              DINHEIRO
              <input type="radio" id="dinheiro" name="paymentMethod" />
            </PaymentButton>
          </PaymentButtons>
        </PaymentCard>
      </PaymentContainer>
      <CartContainer>
        <h1>Cafés selecionados</h1>
        <CardWrapper $iconColor="purple">
          <CartCard />
          <Separator />
          <CartCard />
          <Separator />
        </CardWrapper>
      </CartContainer>
    </CheckoutContainer>
  )
}
