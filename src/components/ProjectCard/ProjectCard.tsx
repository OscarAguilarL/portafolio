import { ProjectInterfaceProps } from '../../interface/ProjectInterfaceProps';
import { Button } from '../Button/Button';

import styles from './ProjectCard.module.css';

export const ProjectCard = ({
    image,
    title,
    description,
    codeLink,
    websiteLink,
}: ProjectInterfaceProps) => {
    return (
        <div className={styles.projectCard}>
            <div className={styles.projectImage}>
                <img src={image} alt={title} />
            </div>

            <div className={styles.projectDescription}>
                <h5>{title}</h5>
                <p>{description}</p>
                <div className={styles.buttonContainer}>
                    <Button
                        href={codeLink}
                        text="Ver código"
                        type="secondary"
                    />
                    <Button
                        href={websiteLink}
                        text="Ver proyecto"
                        type="primary"
                    />
                </div>
            </div>
        </div>
    );
};
