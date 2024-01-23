import { FooterStyle } from "./style"


export const Footer = ()=>{
    
    const handleScrollToTop = () => {
        window.scrollTo({ 
            top: 0,
            behavior: 'smooth' 
        });
      };
    return(
        <>
            <FooterStyle>
                <h2>Motors shop</h2>
                <p>© 2022 -  Todos os direitos reservados.</p>
                <button onClick={handleScrollToTop} >^</button>
            </FooterStyle>
        </>
    )
}