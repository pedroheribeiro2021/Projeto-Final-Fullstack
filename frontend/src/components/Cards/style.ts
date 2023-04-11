import styled from "styled-components";

export const CardStyle = styled.div`
  .container_list_cards {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    min-width:320px;
    
  }
  .list_cards_img img {
    min-width: 320px;
    max-width: 320px;
    min-height: 152px;
    max-height: 152px;
  }
  .list_cards {
    min-width: 320px;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .list_cards_text {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .list_cards_text h3 {
    color: var(--grey1);
    font-weight: 600;
    font-size: 16px;
  }

  .list_cards_text p {
    font-weight: 400;
    font-size: 14px;
    color: var(--grey2);
    line-height: 24px;
  }

  .list_cards_user {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .list_cards_user img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .list_cards_user span {
    font-weight: 500;
    font-size: 14px;
    color: var(--grey2);
  }

  .list_cards_info {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .info_car {
    display: flex;
    gap: 10px;
  }

  .info_car span {
    background-color: var(--brand4);
    padding: 4px 8px;
    border-radius: 4px;
    color: var(--brand1);
    font-weight: 500;
    font-size: 14px;
  }

  .info_car_price span {
    font-weight: 500;
    font-size: 16px;
    color: var(--grey1);
  }
  @media (max-width: 768px) {
   
    .container_list_cards {
        flex-wrap: nowrap;
        overflow-x: scroll;
        width:100%;
        gap:30px;
        align-items:center;

    }
    .container_list_cards::-webkit-scrollbar{
        display:none;
      
        
    }
   
  
   

    .list_cards_img img {
    min-width: 260px;
    max-width: 260px;
   
  }
  .list_cards {
    min-width: 260px;
    max-width: 260px;
   
  }
  }
`;
