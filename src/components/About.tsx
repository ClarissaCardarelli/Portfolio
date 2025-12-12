import "../css/About.css";
import profile_photo from "../assets/images/Cv_photo_transparent.png";

function About() {
  return (
    <section id="about">
      <h2 className="secondary-title">
        À propos de <span className="gradient-text">Moi</span>
      </h2>
      <div className="about-container">
        <div className="photo-container">
          <div className="photo-frame">
            <img src={profile_photo} alt="" />
          </div>
        </div>
        <div className="about-text-container">
          <p className="body-text">
            Après plusieurs années dans la gestion de projets et les relations
            internationales,{" "}
            <span className="highlight-text">
              j'ai souhaité relever un nouveau défi professionnel.
            </span>{" "}
            Aujourd'hui, je suis développeuse full-stack, motivée par la
            création d'applications web modernes, fiables et agréables à
            utiliser.
          </p>

          <br />
          <p className="body-text">
            Avec un parcours mêlant{" "}
            <span className="highlight-text">
              management, business development et enseignement,
            </span>{" "}
            j'ai appris à évoluer dans des environnements dynamiques et à
            collaborer avec des équipes variées. J'apprécie particulièrement les
            projets où sens, créativité et rigueur technique se rencontrent.
          </p>
          <br />
          <p className="body-text">
            En dehors du code, je suis passionnée par les langues, les voyages
            et les défis en tous genres — puzzles, nouveaux hobbies, découvertes
            culturelles ou pratiques sportives. Ce{" "}
            <span className="highlight-text">goût de l'exploration</span> se
            retrouve dans ma manière d'aborder le développement : apprendre,
            tester et évoluer en permanence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
