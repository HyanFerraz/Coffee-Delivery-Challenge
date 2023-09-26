import BannerImage from '../../assets/Banner-Image.svg'
import { coffeeList } from '../../repository/coffeeList'
import { CoffeeCard } from './components/CoffeeCard'
import {
  CoffeeGrid,
  BannerContainer,
  BenefitsBannerContainer,
  BenefitsIcons,
  CoffeeGridTitle,
  BannerWraper,
} from './styles'
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'

export function Home() {
  return (
    <main>
      <BannerContainer>
        <BannerWraper>
          <section>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
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
          </section>
          <img src={BannerImage} alt="" />
        </BannerWraper>
      </BannerContainer>
      <CoffeeGridTitle>Nossos cafés</CoffeeGridTitle>
      <CoffeeGrid>
        {coffeeList.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.name}
              image={coffee.image}
              alt={coffee.alt}
              categories={coffee.categories}
              coffeeName={coffee.name}
              coffeeDescription={coffee.description}
              price={coffee.price}
            />
          )
        })}
      </CoffeeGrid>
    </main>
  )
}
