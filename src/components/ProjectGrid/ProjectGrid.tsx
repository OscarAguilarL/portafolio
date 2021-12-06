import { Wrapper } from '../Wrapper/Wrapper';
import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
    children: JSX.Element;
}

export const ProjectGrid = ({ children }: ProjectGridProps) => {
    return (
        <div className={styles.card} id="proyectos">
            <Wrapper>
                <h2>Mis Proyectos:</h2>
                <div className={styles.ProjectGrid}>{children}</div>
            </Wrapper>
        </div>
    );
};
