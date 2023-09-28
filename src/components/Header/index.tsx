import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/Logo.svg'
import { defaultTheme } from '../../styles/themes/default'
import {
  CartContainer,
  HeaderContainer,
  HeaderWrapper,
  LocaleContainer,
} from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <NavLink to="/" title="Home">
          <img src={logo} alt="" />
        </NavLink>

        <nav>
          <LocaleContainer>
            <MapPin size={22} weight="fill" color={defaultTheme.purple} />
            São Paulo, SP
          </LocaleContainer>
          <NavLink to="/checkout" title="Cart">
            <CartContainer>
              <ShoppingCart size={22} weight="fill" />
            </CartContainer>
          </NavLink>
        </nav>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
