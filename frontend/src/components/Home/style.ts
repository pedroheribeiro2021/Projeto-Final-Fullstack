import styled from "styled-components";
import car from "../../assets/carro.svg";
import carm from "../../assets/carrmobile.svg";

export const HomeStyle = styled.div`
  width: 100%;
  min-width: 320px;
  flex-direction: column;
  justify-content: center;
  display: flex;

  .home_intro {
    background-image: url(${car});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 320px;
    min-height: 550px;
  }
  .home_text {
    height: 100%;
    color: var(--grey10);
    text-align: center;
  }

  .home_container_items {
    padding: 40px;
    display: flex;
    width: 100%;
  }

  .home_filter {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 30%;
  }

  .aditional_filters {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .aditional_filters_button {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 20px;
    
  }
  .filter_mobile {
    display: none;
  }
  .aditional_filters_button button {
    width: 125px;
    height: 37px;
    background-color: var(--grey5);
    border: transparent;
    color: var(--grey3);
  }

  .home_filter ul {
    padding: 20px;
    line-height: 25px;
  }
  .home_filter h2 {
    font-weight: 600;
    font-size: 28px;
  }

  .home_filter ul > li {
    color: var(--grey3);
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      transition: 0.3s;
      color: var(--brand1);
    }
  }

  .home_cards {
    width: 70%;
    min-width: 320px;

    #noAnnoucements {
      font-weight: 400;
      font-size: 24px;
    }
  }
  .next_page {
    display: flex;
    justify-content: center;
    gap: 50px;
    min-width: 320px;
    width:100%;
    .pagination{
      display:flex;
      gap:20px;

      a{
      cursor: pointer;
      font-weight: 500;
      font-size: 20px;
      background-color: transparent;
      border: transparent;
      color: var(--brand2);

      &:hover{
        text-decoration:underline;
      }
    }
    }
  }

  .next_page p {
    font-weight: 600;
    font-size: 20px;
    color: var(--grey3);
  }

  
  .next_page button {
    font-weight: 600;
    font-size: 20px;
    background-color: transparent;
    border: transparent;
    color: var(--brand2);
  }

  @media (max-width: 768px) {
    .home_intro {
      background-image: url(${carm});
    }
    .home_filter {
      display: none;
    }
    .home_container_items {
      padding: 10px;
      justify-content: center;
    }

    .filter_mobile {
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 30px auto;
      min-width: 320px;
    }

    #filter {
      width: 279px;
      height: 48px;
      font-weight: 600;
      font-size: 16px;
      color: var(--whiteFixed);
      background-color: var(--brand2);
      border: transparent;
      border-radius: 4px;
    }
    .home_cards {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      overflow-x: scroll;
    }

    .home_cards::-webkit-scrollbar {
      width: 2px;
    }
    .home_cards::-webkit-scrollbar-thumb {
      background-color: var(--random6);
      border-radius: 4px;
    }
  }
`;

export const ButtonCleanFilter = styled.button`
  border: none;
  color: white;
  width: 279px;
  height: 48px;
  background-color: var(--brand2);
  border-radius: 4px;
`;

export const InputFilter = styled.input`
  padding: 0px 16px;
  font-size: 1rem;
  border:1.5px solid var(--grey7);
  background-color:transparent;
  height:48px;
  border-radius: 4px;
  width: 50%;

  &:focus {
    border-color: #6c63ff;
    outline: none;
  }

`;