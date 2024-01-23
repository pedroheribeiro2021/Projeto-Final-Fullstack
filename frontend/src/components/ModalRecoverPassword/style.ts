import styled from "styled-components";
import ReactModal  from "react-modal";

export const ModalRecoverStyled = styled(ReactModal)`

    background-color: var(--whiteFixed);
    width: 100%;
    max-width: 520px;
    position:absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius:8px;
    display:flex;
    flex-direction:column;
    margin-top:10px;

    .container_modal_items{
        width:100%;
        padding:12px 20px;
        gap:10px;
        display:flex;
        flex-direction:column;
        justify-content:center;

        .close_modal {
            display:flex;
            justify-content:space-between;

            /* h3{
                font-weight: 500;
                font-size: 16px; 
                color: var(--grey1);   
            } */

            button{
                font-size:20px;
                background-color: transparent;
                border:transparent;
                color: var(--grey4);
            }
        }
      

        p{
            /* font-weight: 500; */
            font-size: 14px;
        }
    }

    .input_modal{
        display:flex;
        flex-direction:column;
        gap:8px;

        input{
            padding: 0px 16px;
            outline:none;
            border: 1.5px solid var(--grey7);
            height:40px;
            border-radius: 4px; 
        }

        .brand1-btn {
            width: 30%;
            height: 38px;
        }
    }

    @media (max-width:400px) {

        width: 90%;

    }

`