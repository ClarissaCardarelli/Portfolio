function ProjectCard({
  project: { title, description, tags, image, ghLink, demo },
}) {
  return (
    <div className="project-card">
      <div className="project-img-container">
        <img src={image} alt="hello" />
        <div className="project-links-container">
          {demo && (
            <a
              href={demo}
              className="body-text project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-box-arrow-up-right" />
              Demo
            </a>
          )}
          {ghLink && (
            <a
              href={ghLink}
              className="body-text project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github" />
              Code
            </a>
          )}
        </div>
      </div>
      <article>
        <h3 className="section-title">{title}</h3>
        <p className="body-text">{description}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}

export default ProjectCard;
