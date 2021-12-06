import styles from './Hero.module.css';
import { Button } from '../Button/Button';

import user from '../../assets/images/user.png';

export const Hero = () => {
    return (
        <div className={`${styles.hero} animate__animated animate__zoomIn`}>
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
                    JavaScript y React, pero puedo adaptarme a cualquier
                    framework sin problema alguno.
                </p>
                <p>
                    Llevo 1 año profundizando mis habilidades profesionales
                    creando proyectos personales, en los cuales he reforzado
                    diferentes temas y herramientas. Siempre me ha gustado estar
                    a la vanguardia en la tecnología, por lo que diariamente me
                    estoy informando sobre las nuevas noticias del mundo Tech.
                </p>
                <Button
                    text="Descargar currículum"
                    type="primary"
                    href="../../assets/CV-Oscar_Aguilar.pdf"
                    download={true}
                />
            </div>
        </div>
    );
};
