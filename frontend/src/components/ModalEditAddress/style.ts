import styled from "styled-components";
import ReactModal  from "react-modal";

export const ModalEditAddressStyled = styled(ReactModal)`

    background-color: var(--whiteFixed);
    width: 100%;
    max-width: 520px;
    /* height: 80%; */
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius:8px;
    display:flex;
    flex-direction:column;
    margin-top:10px;
    /* gap: 12px; */

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
            /* max-height: 56px; */

            button{
                font-size:20px;
                background-color: transparent;
                border:transparent;
                color: var(--grey4);
            }
        }

        p{
            font-size: 14px;
            padding: 18px 0 24px;
        }
    }

    .input_modal{
        display:flex;
        flex-direction:column;
        gap:8px;
        padding-bottom: 20px;

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

    .side {
        display: flex;
        gap: 15px;
    }

    .aditional_inputs {
        display:flex;
        flex-direction:column;
        gap:8px;
        padding-bottom: 20px;

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

    .button_actions{
        display:flex;
        gap:10px;
        justify-content:flex-end;
        padding-top: 18px;

        button{
            padding: 12px 20px;
            font-weight: 600;
            font-size: 16px;
            border-radius:4px;
        }

        /* #exclude{
            background-color:var(--grey6);
            border:transparent;
            color: var(--grey2);

            &:hover{
                background-color: var(--grey5);
                transition:0.3s;
            }
        } */
        
        #save{
            color: var(--brand4);
            border:transparent;
            
            &:hover{
                background-color: var(--brand2);
                opacity:0.7;
                transition:0.3s;
            }
        }
    }

    @media (max-width:400px) {

        width: 90%;

        input {
            max-width: 80%;
        }

        .aditional_inputs {
            width: 150px;
        }

        .side {
            gap: 0px;
        }
    }

`