import { useEffect, useRef } from 'react';
import scrollreveal from 'scrollreveal';

import './Footer.css';

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    const ref = useRef<any>(null);

    useEffect(() => {
        const sr = scrollreveal({
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: false,
        });
        sr.reveal(ref.current);
    }, []);

    return (
        <div id="contacto" className="FooterContainer" ref={ref}>
            <div className="contacto">
                <h5>¿Quieres trabajar conmigo? ¡Hazme ping!</h5>
                <a href="mailto:aguilop.oscar@gmail.com">
                    aguilop.oscar@gmail.com
                </a>
            </div>
            <footer>
                <p className="copyright">
                    &copy; Copyright {year} | Oscar Aguilar
                </p>
                <div className="social">
                    <button className="buttonSocial">
                        <i className="fab fa-linkedin"></i>
                    </button>
                    <button className="buttonSocial">
                        <i className="fab fa-twitter-square" />
                    </button>
                    <button className="buttonSocial">
                        <i className="fab fa-github-square" />
                    </button>
                    <button className="buttonSocial">
                        <i className="fas fa-globe"></i>
                    </button>
                </div>
            </footer>
        </div>
    );
};
