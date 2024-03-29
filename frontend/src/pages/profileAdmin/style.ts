import styled from "styled-components";

export const ProfileAdminStyle = styled.div`
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

  .create_announcement {
    display: flex;
    flex-direction: column;
    gap: 34px;
  }

  #create {
    padding: 12px 28px;
    border: 1.5px solid var(--brand1);
    font-weight: 600;
    font-size: 16px;
    color: var(--brand1);
    border-radius: 4px;

    &:hover {
      background-color: var(--brand4);
      transition: 0.5s;
    }
  }

  .profile_user_items {
    background-color: var(--grey10);
    width: 70%;
    display: flex;
    flex-direction: column;
    height: 30%;
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

  @media (max-width: 768px) {
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
`;
