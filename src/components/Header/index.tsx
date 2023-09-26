import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/Logo.svg'
import { defaultTheme } from '../../styles/themes/default'
import { CartContainer, HeaderContainer, LocaleContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <section>
        <img src={logo} alt="" />

        <nav>
          <LocaleContainer>
            <MapPin size={22} weight="fill" color={defaultTheme.purple} />
            São Paulo, SP
          </LocaleContainer>
          <CartContainer>
            <ShoppingCart size={22} weight="fill" />
          </CartContainer>
        </nav>
      </section>
    </HeaderContainer>
  )
}
