import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section id="about" className="min-vh-100 p-5">
        <h2>About</h2>
      </section>

      <section id="skills" className="min-vh-100 p-5">
        <h2>Skills</h2>
      </section>

      <section id="projects" className="min-vh-100 p-5">
        <h2>Projects</h2>
        {/* link tạm để test route động, sau này thay bằng ProjectCard */}
        <Link to="/projects/1">Project 1</Link>{" | "}
        <Link to="/projects/2">Project 2</Link>
      </section>

      <section id="contact" className="min-vh-100 p-5">
        <h2>Contact</h2>
      </section>
    </>
  );
}