import styled from "styled-components";

export const FirstBackGround = styled.div`

    background-color: var(--brand1);
    position: absolute;
    top: 0px;
    /* left: 0; */
    width: 100%;
    height: 50%;

`

export const ProductDetailStyle = styled.section`

    background-color: var(--brand1);

    display: flex;

    div {
        /* background-color: white; */
        border-radius: 4px;
    }

    aside {
        max-width: 440px;

        .gallery {
            height: 377px;
            margin-top: 120px;
            background-color: white;

            h3 {
                padding-top: 36px;
                padding-left: 44px;
                padding-bottom: 32px;
            }
        }

        .photos_gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 14px;

            margin-left: 44px;
        }

        img {
            width: 108px;
            height: 108px;
            background: #E9ECEF;
            cursor: pointer;
        }

        .seller-card {
            background-color: white;

            margin-top: 34px;
            height: 426px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            gap: 35px;

            img {
                background: none;
            }

            p {
                padding: 0 30px;
                text-align: center;
            }

            button {
                width: 200px;
                height: 50px;
            }
        }
    }

    .vehicle-apresentation {
        width: 752px;
        margin-top: 120px;
        margin-left: 151px;
        margin-right: 30px;

        .princialp-image {
            width: 752px;
            height: 355px;
            background-color: white;
            margin-bottom: 16px;
            border-radius: 4px;
        }

        .vehicle-detail {
            background-color: white;
            margin-bottom: 40px;

            height: 230px;

            h3 {
                text-align: center;
                padding: 40px;
            }

            div {
                padding: 15px 40px;

                display: flex;
                    
                span {
                    background: var(--brand4);
                    color: var(--brand1);
                    width: 50px;
                    height: 30px;
                    text-align: center;
                    padding: 5px;
                    margin: 1%;
                    border-radius: 4px;
                }

                p {
                    margin-left: 65%;

                }
            }

            button {
                margin: 0px 40px;
                width: 100px;
                height: 38px;
            }
        }

        .vehicle-description {
            background-color: white;

            height: 213px;
            margin-bottom: 16px;

            h3 {
                padding: 36px 0 22px 44px;
            }

            p {
                align-items: center;
                padding: 0 44px;
            }
        }

        .coments-space {
            background-color: var(--grey10);
            height: 557px;
            padding: 0 44px;

            h3 {
                padding: 36px 0 22px 0px;
            }

            .header-coment {
                display: flex;
                align-items: center;
                gap: 15px;
            }

            p {
                margin: 16px 0 40px 0;
            }
        }

        .coment-area {
            background-color: var(--grey10);

            padding: 0 44px;
            margin-top: 33px;
            height: 280px;

            .user-coment-header {
                display: flex;
                align-items: center;
                gap: 15px;

                padding-top: 40px;
                padding-bottom: 20px;
            }

            form {
                width: 672px;
                height: 128px;
                border: 2px solid var(--grey7);

                textarea:focus {
                    outline: none;
                }

                textarea {
                    resize: none;
                    border: none;

                    width: 85%;
                    height: 85%;
                    padding: 10px 10px;
                }

                button {
                    height: 37px;
                    width: 108px;
                }
            }
        }
    }

`