import { useEffect, useRef } from 'react';
import scrollreveal from 'scrollreveal';

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
        <div className={styles.projectCard} ref={ref}>
            <div className={styles.projectImage}>
                <img src={image} alt={title} />
            </div>

            <div className={styles.projectDescription}>
                <h5>{title}</h5>
                <p>{description}</p>
                <div className={styles.buttonContainer}>
                    <Button
                        href={codeLink}
                        text="Code"
                        type="secondary"
                    />
                    <Button
                        href={websiteLink}
                        text="See live"
                        type="primary"
                    />
                </div>
            </div>
        </div>
    );
};
