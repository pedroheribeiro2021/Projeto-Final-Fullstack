import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lexend', sans-serif;
    text-decoration: none;
    list-style:none;
}

:root {
/* Brand */
    --brand1: #4529E6;
    --brand2: #5126EA;
    --brand3: #B0A6F0;
    --brand4: #EDEAFD;

/* Grey Scale */
    --grey0: #0B0D0D;
    --grey1: #212529;
    --grey2: #495057;
    --grey3: #868E96;
    --grey4: #ADB5BD;
    --grey5: #CED4DA;
    --grey6: #DEE2E6;
    --grey7: #E9ECEF;
    --grey8: #F1F3F5;
    --grey9: #F8F9FA;
    --grey10: #FDFDFD;

/* WhiteFixed */
    --whiteFixed: #FFFFFF;

/* Feedback */
    --alert1: #CD2B31;
    --alert2: #FDD8D8;
    --alert3: #FDD8D8;
    --sucess1: #18794E;
    --sucess2: #CCEBD7;
    --sucess3: #DDF3E4;

/* Colors Random Profile */
    --random1: #E34D8C;
    --random2: #C04277;
    --random3: #7D2A4D;
    --random4: #7000FF;
    --random5: #6200E3;
    --random6: #36007D;
    --random7: #349974;
    --random8: #2A7D5F;
    --random9: #153D2E;
    --random10: #6100FF;
    --random11: #5700E3;
    --random12: #30007D;
}

.heading-1-700 {
    //styleName: Heading/Heading-1-700;
    font-size: 44px;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey1);
}

.heading-1-700 {
    //styleName: Heading/Heading-1-700;
    font-size: 44px;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey1);
}

.heading-1-700 {
//styleName: Heading/Heading-1-700;
    font-size: 44px;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey1);
}

.heading-2-600 {
//styleName: Heading/Heading-2-600;
    font-size: 36px;
    font-weight: 600;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey1);
}

.heading-3-600 {
    //styleName: Heading/Heading-3-600;
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey1);
}

.heading-3-500 {
    //styleName: Heading/Heading-3-500;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey1);
}

.heading-4-600 {
    //styleName: Heading/Heading-4-600;
    font-size: 28px;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey1);
}

.heading-4-500 {
    //styleName: Heading/Heading-4-500;
    font-size: 28px;
    font-weight: 500;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey1);
}

.heading-5-500 {
    //styleName: Heading/Heading-5-500;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey1);
}

.heading-6-600 {
    //styleName: Heading/Heading-6-600;
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey1);
}

.heading-6-500 {
    //styleName: Heading/Heading-6-500;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey1);
}

.heading-7-600 {
    //styleName: Heading/Heading-7-600;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey1);
}

.heading-7-500 {
    //styleName: Heading/Heading-7-500;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey1);
}

.body-1-400 {
    //styleName: Text/body-1-400;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey2);
}

.body-1-600 {
    //styleName: Text/body-1-600;
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey2);
}

.body-2-400 {
    //styleName: Text/body-2-400;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey2);
}

.body-2-500 {
    //styleName: Text/body-2-500;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey2);
}

.button-big-text {
    //styleName: Inputs Buttons/button-big-text;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey2);
}

.button-medium-text {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey2);
}

.input-placeholder {
    //styleName: Inputs Buttons/input-placeholder;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey2);
}

.input-label {
    //styleName: Inputs Buttons/input-label;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--grey2);
}

.grey0-btn {
    background: var(--grey0);
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
}

.grey1-btn {
    background: var(--grey1);
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
}

.grey5-btn {
    background: var(--grey5);
    border-radius: 4px;
    border: none;
    color: var(--grey2)
}

.grey6-btn {
    background: var(--grey6);
    border-radius: 4px;
    border: none;
    color: var(--grey2)
}

.brand1-btn {
    background: var(--brand1);
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
}

.alert1-btn {
    background: var(--alert2);
    border-radius: 4px;
    border: none;
    color: var(--alert1);
}

button{
    cursor: pointer;
}

.modal-overlay {
  background-color: rgba(0,0,0, 0.5);
  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:8;
  transition:1s;
}
.modal-content {
  background-color: var(--whiteFixed);
  width: 100%;
  border-radius: 4px;
}
`