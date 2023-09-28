import './Footer.css'


const Footer = () => {
    return (
        <footer className="footer"> 
        <div className='ctn-center'>
            <div className="footer-icons">
                <a href="https://www.facebook.com/AluraCursosOnline/" target="_blank" rel="noreferrer">
                    <img src="imagens/fb.png" alt="Facebook" />
                </a>

                <a href="https://www.instagram.com/aluraonline/" target="_blank" rel="noreferrer">
                    <img src="imagens/ig.png" alt="instagram" />
                </a>

                <a href="https://www.twitter.com/aluraonline/" target="_blank" rel="noreferrer">
                    <img src="/imagens/tw.png" alt="twitter" />
                </a>
            </div>

            <div>
                <img 
                    className="logo"
                    src='imagens/logo.png' 
                    alt="logo organo">
                </img>
            </div>
            
            <p>Desenvolvido por Alura</p>
        </div>
    </footer> 
    )
}

export default Footer

