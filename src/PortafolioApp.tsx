import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { ProjectCard } from './components/ProjectCard/ProjectCard';
import { ProjectGrid } from './components/ProjectGrid/ProjectGrid';
import { Wrapper } from './components/Wrapper/Wrapper';

export const PortafolioApp = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <Hero />
            </Wrapper>
            <ProjectGrid>
                <>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </>
            </ProjectGrid>
        </>
    );
};
