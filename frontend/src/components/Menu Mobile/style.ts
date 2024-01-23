import styled from "styled-components";

export const MenuStyle = styled.div<{ isOpen: boolean }>`
  .menu_mobile {
    display: none;
  }
  @media (max-width: 768px) {
      .boxUser{margin-top: 0.7rem;
        font-family: Lexend, sans-serif;
        background-color: var(--whiteFixed);
        border: transparent;
        display: flex;
        gap: 0.1rem;
        padding: 10px;
        white-space: nowrap;
        font-size: 12px;
        font-weight: 600;
        color: var(--grey3);
        align-items: center;}
    .menu_mobile {
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 80%;
      top: 30%;
      border-radius: 6px;
    }
    .menu_button {
      background-color: transparent;
      border: transparent;
      font-size: 30px;
      display: flex;
      z-index: 5;
    }

    .menu_items {
      display: flex;
      flex-direction: column;
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
      z-index: 5;
    }
    .button_items {
      background-color: var(--whiteFixed);
      border: transparent;
      display: flex;
      padding: 10px;
      white-space: nowrap;
      font-size: 10px;
      font-weight: 600;
      color: var(--grey3);
    }
    .button_items:hover {
      background-color: var(--grey4);
      transition: 0.7s;
    }
  }
  @media (max-width: 530px) {
    .menu_mobile {
      left: 75%;
    }
  }
  @media (max-width: 430px) {
    .menu_mobile {
      left: 70%;
    }
  }
  @media (max-width: 350px) {
    .menu_mobile {
      left: 65%;
    }
  }
`;
