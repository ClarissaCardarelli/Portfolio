import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero-bg">
      <div className="hero-container">
        <p className="body-text">Bonjour, je suis</p>
        <h1 className="primary-title gradient-text">Clarissa Cardarelli</h1>
        <p className="job-title">Développeur Full Stack </p>
        <p className="body-text">
          Je suis une passionnée de création d'expériences web esthétiques et
          conviviales. Je suis prête à apporter de nouvelles perspectives et des
          solutions créatives à votre équipe.
        </p>

        <div className="hero-buttons-container">
          <a
            href="https://github.com/ClarissaCardarelli"
            className="body-text btn blue-btn"
            target="_blank"
          >
            <i className="bi bi-github btn-icon" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/clarissa-cardarelli/"
            className="body-text btn green-btn"
            target="_blank"
          >
            <i className="bi bi-linkedin btn-icon" /> Linkedin
          </a>
          <button type="button" className="body-text btn orange-btn">
            <i className="bi bi-file-earmark-arrow-down btn-icon" /> Télécharger
            mon CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
