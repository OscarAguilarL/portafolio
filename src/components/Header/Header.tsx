import { useState } from 'react';
import styles from './Header.module.css';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuClick() {
        setMenuOpen(!menuOpen);
    }

    function handleNavClick() {
        setMenuOpen(false);
    }

    return (
        <header className={styles.header} id="about">
            <a href="/">
                <h1>Oscar Aguilar</h1>
            </a>

            <nav className={`${styles.nav} ${menuOpen && styles['is-open']}`}>
                <a onClick={handleNavClick} href="#about">About me</a>
                <a onClick={handleNavClick} href="#proyectos">Projects</a>
                <a onClick={handleNavClick} href="#contacto">Contact</a>
            </nav>
            <div className={styles.menuButton} onClick={handleMenuClick}>
                <button
                    className={`hamburger hamburger--collapse ${
                        menuOpen && 'is-active'
                    }`}
                    type="button"
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner" />
                    </span>
                </button>
            </div>
        </header>
    );
};
