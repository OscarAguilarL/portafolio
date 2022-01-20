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
                    Hi, I'm Oscar Aguilar, Frontend Developer focused on creating web creating web applications using JavaScript.
                </h4>
                <p>
                    My area of expertise is focused on Frontend with
                    JavaScript and React, but I can adapt to any
                    framework without any problem.
                </p>
                <p>
                    I have been deepening my professional skills for 1 year
                    creating personal projects, in which I have reinforced different topics
                    and tools. I have always liked to be at the
                    the forefront of technology, so every day I inform my
                    self about the latest news in the Tech world.
                </p>
                <Button
                    text="Download CV"
                    type="primary"
                    href="https://drive.google.com/file/d/13eZHcvRAtgfjfBJp3oxaRMucPmb7Iyv9/view?usp=sharing"
                    download={true}
                />
            </div>
        </div>
    );
};
