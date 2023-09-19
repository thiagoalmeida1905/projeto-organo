import './Footer.css'


const Footer = () => {
    return (
        <footer className="footer">
            <section className='lista'>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/AluraCursosOnline/" target="_blank">
                            <img src="imagens/fb.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/aluraonline/" target="_blank">
                            <img src="imagens/ig.png" alt="instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/aluraonline" target="_blank">
                            <img src="imagens/tw.png" alt="twitter" />
                        </a>
                    </li>
                </ul>
            </section>
            <section className='logo'>
                <img src="imagens/logo.png" alt="" />
            </section>
            <section className='paragrafo'>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>
        </footer>
    )
}

export default Footer