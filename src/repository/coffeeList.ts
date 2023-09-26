import arabeImage from '../assets/coffeeImages/Arabe.png'
import cafeComLeiteImage from '../assets/coffeeImages/CafeComLeite.png'
import capuccinoImage from '../assets/coffeeImages/Capuccino.png'
import chocolateQuenteImage from '../assets/coffeeImages/ChocolateQuente.png'
import cubanoImage from '../assets/coffeeImages/Cubano.png'
import expressoAmericanoImage from '../assets/coffeeImages/ExpressoAmericano.png'
import expressoCremosoImage from '../assets/coffeeImages/ExpressoCremoso.png'
import expressoGeladoImage from '../assets/coffeeImages/ExpressoGelado.png'
import expressoTradicionalImage from '../assets/coffeeImages/ExpressoTradicional.png'
import havaianoImage from '../assets/coffeeImages/Havaiano.png'
import irlandesImage from '../assets/coffeeImages/Irlandes.png'
import latteImage from '../assets/coffeeImages/Latte.png'
import macchiatoImage from '../assets/coffeeImages/Macchiato.png'
import mocaccinoImage from '../assets/coffeeImages/Mocaccino.png'

export const coffeeList = [
  {
    image: expressoTradicionalImage,
    alt: 'Imagem de um Café Expresso Tradicional',
    categories: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
  },
  {
    image: expressoAmericanoImage,
    alt: 'Imagem de um Café Expresso Americano',
    categories: ['TRADICIONAL'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
  },
  {
    image: expressoCremosoImage,
    alt: 'Imagem de um Café Expresso Cremoso',
    categories: ['TRADICIONAL'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
  },
  {
    image: expressoGeladoImage,
    alt: 'Imagem de um Café Expresso Gelado',
    categories: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
  },
  {
    image: cafeComLeiteImage,
    alt: 'Imagem de um Café com Leite',
    categories: ['TRADICIONAL', 'COM LEITE'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
  },
  {
    image: latteImage,
    alt: 'Imagem de um Café Latte',
    categories: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
  },
  {
    image: capuccinoImage,
    alt: 'Imagem de um Capuccino',
    categories: ['TRADICIONAL', 'COM LEITE'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
  },
  {
    image: macchiatoImage,
    alt: 'Imagem de um Macchiato',
    categories: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
  },
  {
    image: mocaccinoImage,
    alt: 'Imagem de um Mocaccino',
    categories: ['TRADICIONAL', 'COM LEITE'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
  },
  {
    image: chocolateQuenteImage,
    alt: 'Imagem de um Chocolate Quente',
    categories: ['ESPECIAL', 'COM LEITE'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
  },
  {
    image: cubanoImage,
    alt: 'Imagem de um Café Cubano',
    categories: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
  },
  {
    image: havaianoImage,
    alt: 'Imagem de um Café Havaiano',
    categories: ['ESPECIAL'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
  },
  {
    image: arabeImage,
    alt: 'Imagem de um Café Árabe',
    categories: ['ESPECIAL'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
  },
  {
    image: irlandesImage,
    alt: 'Imagem de um Café Irlandês',
    categories: ['ESPECIAL', 'ALCOÓLICO'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
  },
]
