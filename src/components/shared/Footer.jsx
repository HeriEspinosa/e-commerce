import React from 'react'
import './styles/footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <section className='footer__info'>
                <section className="info__gratitude flex">
                    <h3 className="info__gratitude-title">Sample</h3>
                    <a>Thanks</a>
                </section>
                <section className="info__code">
                    <h3 className="info__code-title">GitHub</h3>
                    <a className="letter_Neon" href="https://github.com/HeriEspinosa/repo_react_entregable6.git" target='blank'><p>Mi Codigo <span>Aqui</span></p></a>
                </section>
                <section className="info__redes">
                    <h3 className="footer__information-title">Social</h3>
                    <section className="info__redes_social">
                        <p className="footer__information-info"><a href="http://facebook.com" target="_blank"><i className='bx bxl-facebook-circle'></i></a></p>
                        <p className="footer__information-info"><a href="http://instagram.com/" target="_blank"><i className='bx bxl-instagram-alt' ></i></a></p>
                        <p className="footer__information-info"><a href="https://www.linkedin.com/in/heri-espinosa/" target="_blank"><i className='bx bxl-linkedin' ></i></a></p>
                    </section>
                </section>
            </section>
            <section className="footer__bottom">
                <hr />
                <p><i className='bx bxs-copyright'></i> Ing. Espinosa all rigths reserved</p>
            </section>
        </section>
    )
}

export default Footer