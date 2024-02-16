import styled from "styled-components";


export const MainContainer = styled.main`
    display: flex

`

export const InfoContainer = styled.div`

    form {
        display: grid;
        grid-template-areas:
        'address checkout'
        'payment .';
        gap: 1rem;
    }

    form > section:nth-child(1) {
        grid-area: address ;
    }

    form > section:nth-child(2) {
        grid-area: payment ;
    }

    form > section:nth-child(3) {
        grid-area: checkout ;
        width: 400px;
        margin-top: 1rem;
        background-color:  ${(props) => props.theme['base-card']};
    }

`

export const BaseContainer = styled.section`
    background: ${(props) => props.theme['base-card']};
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin-top: 1rem;
`

export const AddressContainer = styled(BaseContainer)``

export const AddressHead = styled.div`
    display: flex;
    gap: 0.5rem;
    /* font-family: "Baloo 2", sans-serif; */

    svg{
        color: ${(props) => props.theme['yellow-dark']};
    }

    div > span {
        font-size: 16px;
    }

    div > p {
        font-size: 12px;
    }

`



export const CheckoutContainer = styled.section`
    border-radius: 6px 36px;

`

export const ItemContainer = styled.section`
    display: flex;
    padding: 2.5rem;

    gap: 2rem;

    img {
        width: 4rem;
    }

    /* div {
        display: flex;
        gap: 1rem;
    } */

`


export const CoffeeInfo = styled.div`
    display: flex;
    /* gap: 1rem; */
`


export const AddressForm = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
    grid-template-columns: 200px 1fr 60px;
    grid-gap: 16px 12px;

    input:nth-child(1) {
        grid-area: cep ;
    }

    input:nth-child(2) {
        grid-area: street ;
    }

    input:nth-child(3) {
        grid-area: number ;
    }

    input:nth-child(4) {
        grid-area: fullAddress ;
    }

    input:nth-child(5) {
        grid-area: neighborhood ;
    }

    input:nth-child(6) {
        grid-area: city ;
    }

    input:nth-child(7) {
        grid-area: state ;
    }

`

export const InputText = styled.input`
    border-radius: 6px;
    height: 2.5rem;
    border: 1px solid ${(props) => props.theme['base-button']};
    background-color: ${(props) => props.theme['base-input']};
    padding: 12px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
`


export const PaymentContainer = styled(BaseContainer)``

export const PaymentHead = styled.div`
    display: flex;
    gap: 0.5rem;
    /* font-family: "Baloo 2", sans-serif; */

    svg{
        color: ${(props) => props.theme['purple']};
    }

    div > span {
        font-size: 16px;
    }

    div > p {
        font-size: 12px;
    }

`


export const PaymentMethodContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    svg{
        color: ${(props) => props.theme['purple']};
    }

    div {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        justify-content: space-between;
        flex:1;
        font-size: 12px;

    }



`