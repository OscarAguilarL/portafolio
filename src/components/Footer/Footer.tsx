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
                <h5>Do you want to work with me? email me!</h5>
                <a href="mailto:aguilop.oscar@gmail.com">
                    aguilop.oscar@gmail.com
                </a>
            </div>
            <footer>
                <p className="copyright">
                    &copy; Copyright {year} | Oscar Aguilar
                </p>
                <div className="social">
                    <a
                        href="https://www.linkedin.com/in/oscar-agl/"
                        target="_blank"
                        rel="noreferrer"
                        className="buttonSocial"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        href="https://twitter.com/oscar_aguilaar"
                        target="_blank"
                        rel="noreferrer"
                        className="buttonSocial"
                    >
                        <i className="fab fa-twitter-square" />
                    </a>
                    <a
                        href="https://github.com/OscarAguilarL"
                        target="_blank"
                        rel="noreferrer"
                        className="buttonSocial"
                    >
                        <i className="fab fa-github-square" />
                    </a>
                    <a
                        href="https://www.oscar-aguilar.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="buttonSocial"
                    >
                        <i className="fas fa-globe"></i>
                    </a>
                </div>
            </footer>
        </div>
    );
};
