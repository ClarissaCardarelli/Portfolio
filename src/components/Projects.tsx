import "../css/Projects.css";
import projects from "../data/Projects_data.tsx";
import ProjectCard from "./ProjectCard";
// import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section id="projects">
      <h2 className="secondary-title">
        Mes <span className="gradient-text">Projets</span>
      </h2>

      <section className="project-card-container">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {projects.map((p) => (
              <div className="embla__slide" key={p.title}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <button
        type="button"
        className="carousel-arrow left"
        onClick={() => emblaApi?.scrollPrev()}
      >
        prev
      </button>
      <button
        type="button"
        className="carousel-arrow right"
        onClick={() => emblaApi?.scrollNext()}
      >
        next
      </button>
    </section>
  );
}

export default Projects;
