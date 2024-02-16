import {
  HeaderContainer,
  LocationContainer,
  ActionsContainer,
  CartContainer } from './styles'

import logo from '../../assets/Header/logo.svg'
import locationIcon from '../../assets/Header/location-icon.svg'
import cart from '../../assets/Header/cart.svg'
// import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <ActionsContainer>
          <LocationContainer>
            <img src={locationIcon} alt="" />
            <p>Belo Horizonte, MG</p>
          </LocationContainer>
          <CartContainer>
            <img src={cart} alt="" />
          </CartContainer>
        </ActionsContainer>
      </nav>
    </HeaderContainer>
  )
}
