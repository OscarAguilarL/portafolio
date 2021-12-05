import styles from './Hero.module.css';
import './Hero.module.css';

import user from '../../assets/images/user.png';
import { Button } from '../Button/Button';

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroImage}>
                <img
                    src={user}
                    alt="Foto de perfil de Oscar"
                    width="250"
                    height="250"
                />
            </div>

            <div className={styles.heroDescription}>
                <h4>
                    Hola, Soy Oscar Aguilar, Frontend Developer centrado en la
                    creación de aplicaciones web usando JavaScript.
                </h4>
                <p>
                    Mi área de conocimiento se centra en el Frontend con
                    JavaScript y React, pero puedo moverme a cualquier framework
                    sin problema alguno.
                </p>
                <p>
                    Llevo 1 año entero profundizando mis habilidades de
                    profesionales creando proyectos personales, en los cuales he
                    reforzado diferentes temas. Siempre me ha gustado estar a la
                    vanguardia en la tecnología, por lo que diariamente me estoy
                    informando sobre las nuevas noticias del mundo Tech.
                </p>
                <Button
                    text="Descargar currículum"
                    type="primary"
                    // TODO: Agregar url del CV
                    href={'facebook.com'}
                    download={true}
                />
            </div>
        </div>
    );
};
