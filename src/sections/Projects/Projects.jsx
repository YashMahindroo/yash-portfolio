import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://yash-mahindroo-portfolio.netlify.app/"
          h3="Portfolio"
          p="Next.js Portfolio"
        />
        <ProjectCard
          src={freshBurger}
          link=""
          h3="BuddyAI"
          p="AI ChatBot"
        />
        <ProjectCard
          src={hipsster}
          link=""
          h3="AI Nexa"
          p="SaaS Application"
        />
        <ProjectCard
          src={fitLift}
          link=""
          h3="Health Connect"
          p="Patient Management"
        />
      </div>
    </section>
  );
}

export default Projects;
