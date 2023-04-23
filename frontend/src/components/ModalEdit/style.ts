import styled from "styled-components";
import ReactModal  from "react-modal";

export const ModalEditStyled = styled(ReactModal)`

 
    background-color: var(--whiteFixed);
    width: 100%;
    max-width: 520px;
    position:absolute;
    top: 50%;
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
      

        p{
            font-weight: 500;
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
    }

    .input_description{
        display:flex;
        flex-direction:column;
        gap:8px;

        textarea{
            resize:none;
            border-radius:4px;
            border: 1.5px solid var(--grey7);
            padding:10px;
            outline:none;
        }
    }
    label{
        font-weight: 500;
        font-size: 14px;
        color: var(--grey1);
    }

    .close_modal{
        display:flex;
        justify-content:space-between;

        h3{
            font-weight: 500;
            font-size: 16px; 
            color: var(--grey1);   
        }

        button{
            font-size:20px;
            background-color: transparent;
            border:transparent;
            color: var(--grey4);

        }
    }
    .aditional_inputs{
        display:flex;
        gap:14px;
        width:100%;
        div{
            display:flex;
            flex-direction:column;
            gap:8px;
            width:50%;
        }

        input{
            padding: 0px 16px;
            outline:none;
            border: 1.5px solid var(--grey7);
            height:40px;
            border-radius: 4px; 
           
        }
    }

    #add_photo{
        padding: 12px 20px;
        border: 1.5px solid var(--brand4);
        border-radius: 4px;
        background-color: var(--brand4);
        color: var(--brand1);
      
        &:hover{
            opacity:0.8;
            transition:0.3s;
        }
    }

    .button_actions{
        display:flex;
        gap:10px;
        justify-content:flex-end;

        button{
            padding: 12px 20px;
            font-weight: 600;
            font-size: 16px;
            border-radius:4px;
        }

        #exclude{
            background-color:var(--grey6);
            border:transparent;
            color: var(--grey2);

            &:hover{
                background-color: var(--grey5);
                transition:0.3s;
            }
        }
        
        #save{
            background-color:var(--brand3);
            color: var(--brand4);
            border:transparent;
            
            &:hover{
                background-color: var(--brand2);
                opacity:0.7;
                transition:0.3s;
            }
        }
    }

    @media (max-width:400px){

        #add_photo{
            font-size:12px;
        }
            .button_actions{
        

            button{
                padding: 10px 20px;
                font-weight: 600;
                font-size: 12px;
                border-radius:4px;
               
            }
        }   
    }
    .buttons_pub{
        display:flex;
        flex-direction:column;
        gap:12px;
        width:100%;

        div{
            display:flex;
            width:100%;
            gap:10px;

            button{
                padding: 12px 28px;
                width:50%;
                border: 1.5px solid var(--grey4);
                font-weight: 600;
                font-size: 16px;
                color: var(--grey0);
                border-radius: 4px;
                background-color:transparent;

                &:hover{
                    background-color:var(--brand1);
                    color:var(--whiteFixed);
                    transition:0.3s;
                }
            }
        }
    }
`;
