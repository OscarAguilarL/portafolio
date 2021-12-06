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
        <header className={styles.header}>
            <a href="/">
                <h1>Oscar Aguilar</h1>
            </a>

            <nav className={`${styles.nav} ${menuOpen && styles['is-open']}`}>
                <a onClick={handleNavClick} href="#proyectos">Proyectos</a>
                <a onClick={handleNavClick} href="#habilidades">Habilidades</a>
                <a onClick={handleNavClick} href="#contacto">Contacto</a>
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
