import styled from "styled-components";
import car from "../../assets/carro.svg"

export const HomeStyle = styled.div`
    .home_intro{
        background-image: url(${car});
        background-repeat: no-repeat;
        background-size:cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-width:320px;
        min-height:550px;

    }
    .home_text{
        height:100%;
        color: var(--grey10);
        text-align: center;
      
    }

    .home_container_items{
        padding:40px;
        display:flex;

    }

    .home_filter{
        display:flex;
        flex-direction:column;
        gap:30px;
        width:30%;
    
    }

    .aditional_filters{
        display:flex;
        flex-direction: column;
        gap: 30px;
    }

    .aditional_filters_button{
        display:flex;
        padding:10px;
        gap:20px;

    }

    .aditional_filters_button button{
        width: 125px;
        height: 37px;
        background-color: var(--grey5);
        border: transparent;
        color: var(--grey3);
    }

    
    .home_filter ul{
        padding: 20px;
        line-height:25px;
    }
    .home_filter h2{
        font-weight: 600;
        font-size: 28px;
    }

    .home_filter ul>li{
        color: var(--grey3);
        font-weight: 500;
        font-size: 20px;
    }

    .home_cards{
        width:70%;

        
    }
    .next_page{
        display:flex;
        justify-content: center;
        gap:50px;
       
    }

    .next_page p{
        font-weight: 600;
        font-size: 20px;
        color:var(--grey3);
    }

    .next_page button{
        font-weight: 600;
        font-size: 20px;
        background-color: transparent;
        border: transparent;
        color: var(--brand2);
    }
`