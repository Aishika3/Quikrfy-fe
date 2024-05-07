import "../styles/Projects.css";
import { Card } from "components";
import plag from "../assets/plag.jpeg";
import python from "../assets/python_automation.jpeg";

export const Projects = () => {
  const PROJECTS = [
    {
      logo: python,
      title: "Google Scholar Automation Tool",
      description:
        "A Python automation tool that streamlines referencing by extracting Harvard/APA citations from Google Scholar PDFs, inserting in-text references and bibliographies, and analyzing related websites for targeted in-text citations.",
    },
    {
      logo: plag,
      title: "Plagiarism Detection",
      description:
        "A plagiarism detection and paraphrasing site that analyzes text, calculates plagiarism percentage, and provides rephrased lines to avoid copyright infringement.",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h1 className="projects_title">Our Past Products</h1>
      <div className="projects_row">
        {PROJECTS.map((project) => (
          <Card
            key={project.title}
            {...project}
            className="projects_card"
          />
        ))}
      </div>
    </section>
  );
};
