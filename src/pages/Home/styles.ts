import styled from "styled-components";


export const MainWrapper = styled.main`
  padding-bottom: 3rem ;

`

export const IntroContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-top: 5rem;


    & > img {
      width: 400px;
    }
`
export const TitleItemsContainer = styled.div``

export const TitleContainer = styled.div`

h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 40px;
    min-width: 588px;
    text-wrap: balance;
}

p {
    font-size: 0.9rem ;
    margin-top: 1.5rem ;
}

`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-size: 0.7rem ;
    font-weight: 300;
  }

`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  margin-top: 2rem ;

  div:nth-child(2) {
    transform: translateX(-34%);
  }

  div:nth-child(4) {
    transform: translateX(-34%);
  }
`


export const CoffeContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

`
