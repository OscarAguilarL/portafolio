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
                    Hi, I'm Oscar Aguilar, Frontend Developer.
                </h4>
                <p>
                    As a Frontend developer, I am focused on scalable and maintainable web applications, following the most common best practice standards, always keeping the user experience as a priority.
                </p>
                <p>
                    Experience in building scalable and maintainable software systems, using agile methodologies and modern software engineering practices. Strong problem solving skills and the ability to work collaboratively with multi-disciplinary teams. Passionate learner who is constantly looking to improve and keep up with the latest industry trends, specifically in improving my skills with best practices and standards in code architecture and design patterns.
                </p>
                <Button
                    text="Download CV"
                    type="primary"
                    href="https://drive.google.com/file/d/1q9hlqfr__2SA1d9cHrmjlFdcc9qONptE/view?usp=sharing"
                    download={true}
                />
            </div>
        </div>
    );
};
