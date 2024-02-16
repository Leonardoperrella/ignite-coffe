import homeCoffe from '../../assets/Intro/home-coffe.svg'
import icon1 from '../../assets/Intro/Icon1.svg'
import icon2 from '../../assets/Intro/Icon2.svg'
import icon3 from '../../assets/Intro/Icon3.svg'
import icon4 from '../../assets/Intro/Icon4.svg'
import { coffeList } from './coffeList'
import { CoffeCard } from './components/CoffeCard'
import { CoffeContainer, IntroContainer, ItemContainer, ItemsContainer, MainWrapper, TitleContainer, TitleItemsContainer } from './styles'


export function Home() {

  return (
    <MainWrapper>
      <IntroContainer>
        <TitleItemsContainer>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </TitleContainer>
          <ItemsContainer>
            <ItemContainer>
              <img src={icon1} alt="" />
              <p>Compra simples e segura</p>
            </ItemContainer>
            <ItemContainer>
              <img src={icon2} alt="" />
              <p>Embalagem mantém o café intacto</p>
            </ItemContainer>
            <ItemContainer>
              <img src={icon3} alt="" />
              <p>Entrega rápida e rastreada</p>
            </ItemContainer>
            <ItemContainer>
              <img src={icon4} alt="" />
              <p>O café chega fresquinho até você</p>
            </ItemContainer>
          </ItemsContainer>
        </TitleItemsContainer>
        <img src={homeCoffe} alt="" />
      </IntroContainer>
      <h2>Nossos cafés</h2>
      <CoffeContainer>
        {coffeList.map((item)=> (
        <CoffeCard
          key={item.id}
          tags={item.tags}
          img={item.img}
          title={item.title}
          description={item.description}
          price={item.price}
          />
        ))}

      </CoffeContainer>
    </MainWrapper>
  )
}