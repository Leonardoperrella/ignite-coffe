import imgExTradicional from '../../assets/Coffes/exp-tradicional.svg'
import imgExAmericano from '../../assets/Coffes/exp-americano.svg'
import imgExCremoso from '../../assets/Coffes/exp-cremoso.svg'
import imgExGelado from '../../assets/Coffes/exp-gelado.svg'
import imgCafeComLeite from '../../assets/Coffes/cafe-leite.svg'


export const coffeList = [
    {
      id: 1,
      tags: ['tradicional'],
      img: imgExTradicional,
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.90,
    },
    {
        id: 1,
        tags: ['tradicional'],
        img: imgExAmericano,
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
      },
      {
        id: 1,
        tags: ['tradicional'],
        img: imgExCremoso,
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
      },
      {
        id: 1,
        tags: ['tradicional', 'gelado'],
        img: imgExGelado,
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90,
      },
      {
        id: 1,
        tags: ['tradicional', 'com leite'],
        img: imgCafeComLeite,
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90,
      },
  ]