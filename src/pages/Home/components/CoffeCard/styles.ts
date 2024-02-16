import styled from "styled-components";


export const CardContainer = styled.div`
    background: ${(props) => props.theme['base-card']};
    padding: 0 20px 20px;
    border-radius: 6px 36px;
    width: 16rem;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    text-align: center;

    img {
        margin-top: -20px;
        max-width: 120px;
        max-height: 120px;
        align-self: center;
    }

    h3 {
        margin-top: 0.8rem ;
    }

    p {
        font-size: 0.7rem;
    }

`


export const TagContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.3rem;
    font-size: 0.7rem ;
    margin-top: 0.8rem ;

    span {
            background: ${(props) => props.theme['yellow-light']};
            color: ${(props) => props.theme['yellow-dark']};
            padding: 4px 8px;
            border-radius: 100px;
            text-transform: uppercase
        }
`


export const CartContainer = styled.div`

  background: ${(props) => props.theme['purple-dark']};


  padding: .8rem;
  border-radius: 6px ;

  img {
      transform: translateY(5px);
  }
`


export const SelectItemContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1rem ;
    align-items: center;
`

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;


    span:last-child {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        color: ${(props) => props.theme['base-text']};
    }

`

export const ChoiceContainer = styled.div`
    display: flex;
    gap: 6px;
`
