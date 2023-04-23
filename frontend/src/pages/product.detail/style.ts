import styled from "styled-components";

export const ProductDetailStyle = styled.section`

    display: flex;
    background: linear-gradient(to bottom, var(--brand1) 30%, var(--grey7) 30%);
    flex-direction:column;
    align-items:center;
    min-width:320px;
    .container_items{
        display:flex;
        width:100%;
        justify-content: center;
        margin-top:90px;
        min-width:320px;
        flex-wrap:nowrap;
        
       
    }
    
    .vehicle-apresentation{
        display:flex;
      
        gap:16px;
        min-width:320px;
      
        width:70%;
        justify-content:space-between;
      
        
    }

    .container_img{
        width: 100%;
        min-height:355px;
        max-height:355px;
        border-radius: 4px;
        border: transparent;
        max-width:752px;
        display:flex;
        min-width:320px;
        background-color:var(--grey10);
        img{
            width:100%;
            object-fit:scale-down;
            height:100%;
           
        }

     
    }

    .vehicle-detail{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 28px 44px;
        gap: 41px;
        border: transparent;
        width: 100%;
        max-width:752px;
        height: 239.39px;
        min-width:320px;
        border-radius:4px;
        background-color:var(--grey10);
        h3{
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            color: var(--grey1);
           
        }


    }
    .vehicle-informations{
        display:flex;
        flex-direction:column;
        gap:16px;
        width:60%;
        min-width:320px;
    }
    .brand1-btn{
        padding: 12px 20px;
        font-weight: 600;
        font-size: 14px;
    }

    .brand1-btn:hover{
        opacity:0.7;
        transition:0.5s;
    }

    .vehicle-detail_text{
        display:flex;
        justify-content:space-between;
        width:100%;
        align-items:center;
    }

    .vehicle_detail_text_span{
        display:flex;
        gap:12px;

        span{
            padding: 4px 8px;
            background-color:var(--brand4);
            color:var(--brand1);
            font-weight: 500;
            font-size: 14px;
            border-radius:4px;
        }
        p{
            font-weight: 500;
            font-size: 16px;
            color: var(--grey1);
        }
    }

    .vehicle-description{
        display:flex;
        flex-direction:column;
        padding: 36px 44px;
        width: 100%;
        height: 213px;
        max-width:752px;
        gap: 32px;
        border-radius:4px;
        border: transparent;
        background-color:var(--grey10);
        margin-top:23.61px;
        min-width:320px;
        h3{
            font-weight: 600;
            font-size: 20px;
            color: var(--grey1);
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;

        }
        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;
            color: var(--grey2);
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
    }

    .coments-space{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 36px 44px;
        gap: 24px;
        width: 100%;
        max-width:752px;
        height: 557px;
        border: transparent;
        border-radius:4px;
        background-color:var(--grey10);
        margin-bottom: 23.61px;
        min-width:320px;
        h3{
            font-weight: 600;
            font-size: 20px;
            color: var(--grey1);
        }
    }
    .container_list_coments{
        padding: 0px;
        display:flex;
        flex-direction:column;
        gap:44px;
        width: 100%;
        height: 436px;
        
        li{
            display:flex;
            flex-direction:column;
            gap:12px;
           
        }
        p{
           
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;

        }
    }
 
    .header-coment{
        display:flex;
        align-items:center;
        gap:8px;
     
       
      
    }
    .past_time{
        font-weight: 400;
        font-size: 12px;
        color: var(--grey3);
    }
    #user{
        width: 32px;
        height: 32px;
        border-radius:50%;
    }
    
    .coment-area{
        width: 100%;
        height: 289px;
        padding: 36px 44px;
        gap:15px;
        border-radius:4px;
        max-width:752px;
        border: transparent;
        display:flex;
        flex-direction:column;
        background-color:var(--grey10);
    }

    .user-coment-header{
        display:flex;
        gap:8px;
        align-items:center;

        img{
            width: 32px;
            height: 32px;
            border-radius:50%;
        }
    }

    .input-placeholder{
        width: 100%;
        height: 128px;
        resize:none;
        border-radius:4px;
        border: 1.5px solid var(--grey7);
        padding:10px;
        outline:none;
    }

    .input-placeholder::placeholder{
        font-weight: 400;
        font-size: 16px;
        color: var(--grey3);
    }

    .fast_comments{
        display:flex;
        gap:8px;
        align-items:flex-start;

        div{
            display:flex;
            gap:8px;
         
        }

        button{
            padding:  8px;
            background-color: var(--grey7);
            border-radius:24px;
            color: var(--grey3);
            font-weight: 500;
            font-size: 12px;
            border:transparent;
        }

        button:hover{
            background-color: var(--grey5);
            transition:0.5s;
        }
    }
   
    .submit_comment{
        display:flex;
        flex-direction:column;
        align-items:flex-end;
        
     
    }
    
    #comment{
        position:absolute;
        margin-top:80px;
        margin-right:10px;
    }
    
    form{
        display:flex;
        flex-direction:column;
        gap:15px;
    }
   
    aside{
        width:30%;
        display:flex;
        flex-direction:column;
        gap:34px;
        position:absolute;
        max-width:470px;
        min-width:320px;
        right:10%;
     
    }
    
    .gallery{
        width: 100%;
        min-height: 359px;
        max-height: 359px;
        min-width:320px;
        background-color:var(--grey10);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 36px 44px;
        gap: 20px;
        border-radius:4px;
        object-fit:scale-down;
        

        h3{
            margin:0;
            
        }

    }
    .photos_gallery::-webkit-scrollbar{
        width:7px;
        
        
    }

    .photos_gallery::-webkit-scrollbar-thumb{
      background-color:var(--random6);
      border-radius:4px;
        
    }


    .photos_gallery{
        display:flex;
        gap:14px;
        flex-wrap:wrap;
        overflow-y:scroll;
        img{
            
            width: 108px;
            height: 108px;
            background-color:var(--grey7);
            object-fit:scale-down;
        }
    }

    .seller-card{
        width: 100%;
        height: 426px;
        min-width:320px;
        padding: 36px 44px;
        border-radius:4px;
        display:flex;
        flex-direction:column;
        gap:32px;
        background-color:var(--grey10);
        justify-content:center;
        align-items:center;

        img{
            width: 104px;
            height: 104px;
            border-radius:50%;
        }
        
        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;
            text-align:center;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        button{
            display: flex;
            min-width: 206px;
            min-height: 48px;
            max-width: 206px;
            max-height: 48px;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            font-size: 16px;
        }

        button:hover{
            opacity:0.9;
            transition:0.5s;
        }
    }
    .container_img{
        gap:14px;
        flex-wrap:wrap;
    }

    @media(max-width:768px){
        .vehicle-apresentation{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
        }

        aside{
            position:relative;
            left:0;
            right:0;
        }
       
       .gallery{
            padding:30px;
       }
    }
    @media(max-width:1024px){
        aside{
            position:relative;
            left:0;
            right:0;
            width:100%;
        }
        
    }

    @media(max-width:1150px){
        .fast_comments{
            flex-direction:column;
           
        }
        .coment-area{
            height:360px;
        }
        #comment{
            position:relative;
            left:0;
            margin:0;
        }
        .submit_comment{
            display:block;
        }
    }
    @media (min-width:1780px){
        aside{

            right:13%;
        }
    }
    @media (min-width:1850px){
        aside{

            right:15%;
        }
    }

    @media (min-width:1920px){
        aside{

            right:18%;
        }
    }
`