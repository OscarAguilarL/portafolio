import { useState } from 'react';
import styles from './Header.module.css';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuClick() {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className={styles.header}>
            <a href="/">
                <h1>Oscar Aguilar</h1>
            </a>

            <nav className={`${styles.nav} ${menuOpen && styles['is-open']}`}>
                <a onClick={handleMenuClick} href="#proyectos">Proyectos</a>
                <a onClick={handleMenuClick} href="#habilidades">Habilidades</a>
                <a onClick={handleMenuClick} href="#contacto">Contacto</a>
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
