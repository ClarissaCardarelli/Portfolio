import "../css/Hero.css";

function Hero() {
  return (
    <header className="hero-bg">
      <section className="hero-container">
        <p className="body-text">Bonjour, je suis</p>
        <h1 className="primary-title gradient-text">Clarissa Cardarelli</h1>
        <h2>Développeur Full Stack</h2>
        <p className="body-text">
          Polyvalente et adaptable, je relève des défis, explore de nouvelles
          idées et m'investis pleinement dans chaque projet
        </p>
        <div className="hero-buttons-container">
          <a
            href="https://github.com/ClarissaCardarelli"
            className="body-text btn blue-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github btn-icon" aria-hidden="true" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/clarissa-cardarelli/"
            className="body-text btn green-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin btn-icon" aria-hidden="true" />
            Linkedin
          </a>
          <a href="#" download className="body-text btn orange-btn">
            <i
              className="bi bi-file-earmark-arrow-down btn-icon"
              aria-hidden="true"
            />
            Télécharger CV
          </a>
        </div>
      </section>
    </header>
  );
}

export default Hero;
