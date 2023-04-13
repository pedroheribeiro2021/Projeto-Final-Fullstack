import styled from "styled-components";


export const FilterStyle  = styled.div<{openFilter:boolean}>`
    display:none;

    @media(max-width:768px){
        display: ${({ openFilter }) => (openFilter? "flex" : "none")};
        width:100%;
        min-width:320px;
        position:absolute;
        top:0;
        left:0;
        padding:20px;
        flex-direction:column;
        z-index:4;
        background-color: var(--whiteFixed);
        top:60px;
    
      
      
        .home_filter_mobile{
            display:flex;
            flex-direction:column;
            gap:10px;
           
            
           
        }
        .home_filter_mobile ul{
            padding: 10px;
            line-height:20px;
        }
        .home_filter_mobile h3{
            font-weight: 600;
            font-size: 20px;
        }
    
        .home_filter_mobile ul>li{
            color: var(--grey3);
            font-weight: 500;
            font-size: 17px;
        }
    
        .aditional_filters_mobile{
            display:flex;
            flex-direction: column;
            gap: 10px;
        }
    
        .aditional_filters_button_mobile{
            display:flex;
            padding:10px;
            gap:20px;
    
        }
       
        .aditional_filters_button_mobile button{
            width: 100px;
            height: 37px;
            background-color: var(--grey5);
            border: transparent;
            color: var(--grey3);
        }
        .home_filter_close{
            display:flex;
            justify-content:space-between;
        }
        .home_filter_close p{
            font-weight: 500;
            font-size: 16px;
            color: var(--grey1);
        }

        .home_filter_close button{
            font-size:24px;
            background-color:transparent;
            color: var(--grey4);
            border:transparent;
        }
       
        #ads{
            width:279px;
            height:48px;
            font-weight: 600;
            font-size: 16px;
            color: var(--whiteFixed);
            background-color: var(--brand2);
            border: transparent;
            border-radius: 4px;
        }
    }
`


