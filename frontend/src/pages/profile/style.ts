import styled from "styled-components";

export const ProfileStyle = styled.div`
  display: flex;
  background: linear-gradient(to bottom, var(--brand1) 15%, var(--grey8) 15%);
  min-width: 100%;
  flex-direction: column;
  align-items: center;
  min-width: 320px;

  .container_profile {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 320px;
    width: 100%;
  }

  .profile_user_items {
    background-color: var(--grey10);
    width: 70%;
    display: flex;
    flex-direction: column;
    height: 330px;
    border-radius: 4px;
    border: transparent;
    padding: 40px;
    gap: 24px;
    min-width: 320px;
    img {
      width: 104px;
      height: 104px;
      border-radius: 50%;
    }

    .profile_text {
      display: flex;
      flex-direction: column;
      gap: 24px;
      .info_profile {
        display: flex;
        gap: 8px;
        align-items: center;
        h3 {
          font-weight: 600;
          font-size: 20px;
          color: var(--grey1);
        }
        span {
          padding: 4px 8px;
          background-color: var(--brand4);
          font-weight: 500;
          font-size: 14px;
          color: var(--brand1);
          border-radius: 4px;
        }
      }
      p {
        font-weight: 400;
        font-size: 16px;
        color: var(--grey2);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
  .container_cards {
    padding: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 65px;

    h3 {
      font-weight: 600;
      font-size: 24px;
    }

    /* .container_list_cards{
        width:100%;
        padding:0 100px;
        
    } */

    .container_list_cards {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    min-width: 320px;
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

    h3 {
      cursor: pointer;
    }
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

    #noAnnoucements {
      font-weight: 400;
      font-size: 24px;
    }
  }
  .container_list_cards {
    width: 100%;
    padding: 0 100px;
  }

  @media (max-width: 1100px) {
    background: linear-gradient(to bottom, var(--brand1) 10%, var(--grey8) 10%);
  }


    @media(max-width:768px){
    
      .container_list_cards{
        padding:10px;
      }
      .container_cards{
        padding:0px;
        gap:20px;
        margin-top:40px;
        margin-bottom:100px;
      }

      .container_list_cards {
      flex-wrap: nowrap;
      overflow-x: scroll;
      width: 100%;
      gap: 30px;
      align-items: center;
    }
    .container_list_cards::-webkit-scrollbar {
      display: none;
    }

    .list_cards_img img {
      min-width: 260px;
      max-width: 260px;
    }
    .list_cards {
      min-width: 260px;
      max-width: 260px;
    }

    .container_list_cards {
      padding: 10px;

    }
    .container_cards {
      padding: 0px;
      gap: 20px;
      margin-top: 40px;
      margin-bottom: 100px;
    }
    }
}
`;
