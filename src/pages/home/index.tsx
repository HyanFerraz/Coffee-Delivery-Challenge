import BannerImage from '../../assets/Banner-Image.svg'
import { CoffeeCard } from './components/CoffeeCard'
import {
  CoffeeGrid,
  BannerContainer,
  BenefitsBannerContainer,
  BenefitsIcons,
  CoffeeGridTitle,
} from './styles'
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'
import expressoImage from '../../assets/coffeeImages/Coffee.png'

export function Home() {
  return (
    <main>
      <BannerContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <BenefitsBannerContainer>
            <p>
              <BenefitsIcons benefitsColor="yellow-dark">
                <ShoppingCart size={16} weight="fill" color="white" />
              </BenefitsIcons>
              Compra simples e segura
            </p>
            <p>
              <BenefitsIcons benefitsColor="gray">
                <Package size={16} weight="fill" color="white" />
              </BenefitsIcons>
              Embalagem mantém o café intacto
            </p>
            <p>
              <BenefitsIcons benefitsColor="yellow">
                <Timer size={16} weight="fill" color="white" />
              </BenefitsIcons>
              Entrega rápida e rastreada
            </p>
            <p>
              <BenefitsIcons benefitsColor="purple">
                <Coffee size={16} weight="fill" color="white" />
              </BenefitsIcons>
              O café chega fresquinho até você
            </p>
          </BenefitsBannerContainer>
        </div>
        <img src={BannerImage} alt="" />
      </BannerContainer>
      <CoffeeGridTitle>Nossos cafés</CoffeeGridTitle>
      <CoffeeGrid>
        <CoffeeCard
          image={expressoImage}
          alt="Imagem do Café"
          categories={['TRADICIONAL']}
          coffeeName="Expresso Tradicional"
          coffeeDescription="O tradicional café feito com água quente e grãos moídos"
          price="9,90"
        />
      </CoffeeGrid>
    </main>
  )
}
