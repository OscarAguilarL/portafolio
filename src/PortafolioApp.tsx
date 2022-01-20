import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { ProjectCard } from './components/ProjectCard/ProjectCard';
import { ProjectGrid } from './components/ProjectGrid/ProjectGrid';
import { Wrapper } from './components/Wrapper/Wrapper';
import { projects } from './data/projects';

export const PortafolioApp = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <Hero />
            </Wrapper>
            <ProjectGrid>
                {projects.map((project) => (
                    <ProjectCard {...project} key={project.websiteLink} />
                ))}
            </ProjectGrid>
            <Wrapper>
                <Footer />
            </Wrapper>
        </>
    );
};
