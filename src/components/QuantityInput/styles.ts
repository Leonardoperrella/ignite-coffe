import styled from "styled-components";


export const Container = styled.div`
    background: ${(props) => props.theme['base-button']};
    padding: 8px;
    border-radius: 6px;


    button {
        background: ${(props) => props.theme['base-button']};
        border: none;
        margin-top: 5px;
    }


    button:hover{
        background: ${(props) => props.theme['base-button']};
        color: ${(props) => props.theme['purple-dark']};;
    }

    span {
        padding: 10px
    }

`