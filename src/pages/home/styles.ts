import styled from 'styled-components'
import backgroundblur from '../../assets/Background.svg'

export const BannerContainer = styled.section`
  width: 100%;
  background: url(${backgroundblur});
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.875rem;
  gap: 3.5rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 4.125rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`

export const BenefitsBannerContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.25rem 2rem;

  p {
    display: flex;
    justify-content: left;
    flex: 1;
    align-items: center;
    gap: 0.75rem;
  }
`

const BENEFITS_COLORS = {
  'yellow-dark': 'yellow-dark',
  gray: 'base-text',
  purple: 'purple',
  yellow: 'yellow',
} as const

interface BenefitsProps {
  benefitsColor: keyof typeof BENEFITS_COLORS
}

export const BenefitsIcons = styled.span<BenefitsProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.theme[BENEFITS_COLORS[props.benefitsColor]]};
`

export const CoffeeGridTitle = styled.h1`
  margin-bottom: 3.375rem;
  margin-top: 2rem;
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeeGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
`
