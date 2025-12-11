import "../css/Footer.css";

function Footer() {
  return (
    <footer>
      <h3>Restons en contact !</h3>
      <p className="body-text">
        Je suis toujours ouverte à discuter de nouveaux projets et opportunités.
      </p>
      <div className="footer-button-container">
        <a
          href="https://github.com/ClarissaCardarelli"
          className="footer-link footer-link-GH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/clarissa-cardarelli/"
          className="footer-link footer-link-LN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin footer-icon" />
        </a>
        <a
          href="mailto:ccardare@gmail.com"
          className="footer-link footer-link-GM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-envelope footer-icon" />
        </a>
      </div>
      <p className="body-text line-break">
        © 2025 Clarissa Cardarelli. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;
