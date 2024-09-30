import { projects } from "../projects";
import "./project.scss";

const Project = () => {
  return (
    <div className="project">
      {projects.map((project) => {
        return (
          <section key={project.id}>
            <h1>Projects</h1>
            <div className="project">
              <div className="img">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <button>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    see demo
                  </a>
                </button>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Project;
