import styled from "styled-components";

export const FooterStyle = styled.footer`
    background-color: var(--grey0);
    padding: 40px;
    margin-top:40px;
    display:flex;
    color: var(--whiteFixed);
    justify-content: space-between;
    align-items: center;
    width:100%;
    min-width:320px;
    button{
        width: 53px;
        height: 50px;
        border-radius: 4px;
        background-color: var(--grey1);
        border: transparent;
        font-weight: 900;
        font-size: 16px;
        color: var(--whiteFixed);
    }
    @media(max-width:768px){
        flex-direction:column;
        gap:30px;
        text-align:center;
    }
`