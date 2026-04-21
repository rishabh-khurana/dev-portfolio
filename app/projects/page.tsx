const projects = [
  {
    name: "Project Alpha",
    github: "https://github.com/rishabhkhurana/project-alpha",
  },
  {
    name: "Project Beta",
    github: "https://github.com/rishabhkhurana/project-beta",
  },
  {
    name: "Project Gamma",
    github: "https://github.com/rishabhkhurana/project-gamma",
  },
  {
    name: "Project Delta",
    github: "https://github.com/rishabhkhurana/project-delta",
  },
  {
    name: "Project Epsilon",
    github: "https://github.com/rishabhkhurana/project-epsilon",
  },
];

export default function Projects() {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.name} className="project-card">
          <span className="project-name">{project.name}</span>
          <a
            href={project.github}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
        </div>
      ))}
    </div>
  );
}
