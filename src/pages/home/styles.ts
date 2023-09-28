import styled from 'styled-components'
import backgroundblur from '../../assets/Background.svg'
import { Section } from '../../layouts/styles'

export const BannerContainer = styled.section`
  background: url(${backgroundblur});
`

export const BannerWraper = styled.section`
  ${Section}
  padding: 5.875rem 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
`

export const BenefitsBannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.25rem 0;

  p {
    font-size: 1rem;
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
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0 10rem;
  margin-bottom: 3.375rem;
  margin-top: 2rem;
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeeGrid = styled.section`
  ${Section}
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
  padding: 0 10rem;
`
