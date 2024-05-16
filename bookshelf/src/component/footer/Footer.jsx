import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer className="centered vertical-direction">
        <h2 className="mb-lg">
          Developed with <span className="">&lt;/&gt;</span> by Pallavi Langhe
        </h2>
        <ul className="style-list-none mb-lg">
          <li className="inline-block padding-xs">
            <a
              className="footer-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Pallavi-Langhe"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
          </li>
          <li className="inline-block padding-xs">
            <a
              className="footer-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/pallavilanghe/"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </li>
          <li className="inline-block padding-xs">
            <a
              className="footer-link"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/pallavilanghe17/"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
          </li>
        </ul>
        <small>
          ©2023 BookShelf
          <a
            className="decor-none footer-link"
            href="https://github.com/Pallavi-Langhe"
          >

          </a>
        </small>
      </footer>
    </>
  );
};

export { Footer };
