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

    .header_button button:hover{
        
        border: 1.5px solid transparent;
        color: var(--brand1);
    }
`