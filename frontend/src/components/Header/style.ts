import styled from "styled-components";

export const HeaderStyle = styled.header`
    display:flex;
    justify-content: space-between;
    min-height: 60px;
    padding:0px 40px;
    align-items: center;
    border-bottom: 2px solid var(--grey6);
    width: 100%;
    min-width: 320px;
    position: fixed;
    background-color: var(--whiteFixed);
    z-index:2;
    .header_button{
        display:flex;
        gap:30px;
    }
    .header_button button{
        padding: 12px 28px;
        color: var(--grey0);
        font-size:16px;
        border-radius: 4px;
        border: 1.5px solid var(--grey4);
        background-color: transparent;
    }
    .menu_mobile{
            display:none;
        }
    .header_button button:hover{
        
        border: 1.5px solid transparent;
        color: var(--brand1);
    }
    @media(max-width:768px){

        .header_button button{
            display:none;
        }
        .menu_mobile{
            display:flex;
           
        }
        .menu_mobile button{
            background-color:transparent;
            border:transparent;
            font-size:30px;
            display:flex;
            align-items:center;
        }
        
    }
`