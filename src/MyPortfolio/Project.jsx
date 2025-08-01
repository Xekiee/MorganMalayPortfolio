import Styles from "./projects.module.css";
import Plantito from "../Assets/Plantitotita.png";
import Portfolio from "../Assets/Portfolio.png";
import SimpleJSApp from "../Assets/SimpleJSApp.png";
import InvetorySystem from "../Assets/Inventory.png";
export default function Project() {
  return (
    <div>
      <section className={Styles.projectsection} id="projects">
        <div className={Styles.titleproject}>
          <span className={Styles.title}>My Projects</span>
        </div>

        <div className={Styles.projects}>
          <a className={Styles.Projects1}>
            <div className={Styles.Title1}>
              <div className={Styles.Positionn}>
                <span>Quality Assurance</span>
                <span>UI/UX Designer</span>
              </div>
              <div className={Styles.Year}>2024</div>
            </div>
            <div className={Styles.TitleCapstonee}>
              <div className={Styles.projectTitle}>
                <span>Capstone : PLANTITOTITA</span>
              </div>
              <div className={Styles.Description}>
                <span>Plant scanning mobile application</span>
              </div>
            </div>
            <div>
              <img src={Plantito} alt="" className={Styles.capstoneImage} />
            </div>
          </a>
          <a className={Styles.Projects3}>
            <div className={Styles.Title1}>
              <div className={Styles.Positionn}>
                <span>UI/UX Design </span>
                <span>Frontend Developer</span>
              </div>
              <div className={Styles.Year}>2025</div>
            </div>
            <div className={Styles.TitleCapstonee}>
              <div className={Styles.projectTitle}>
                Intern : CGWCEISC Inventory System
              </div>
              <div className={Styles.Description}>
                <span>
                  A web based inventory management system for PCG Storage and
                  Accountability Officer.
                </span>
              </div>
            </div>
            <div>
              <img
                src={InvetorySystem}
                alt=""
                className={Styles.imgPortfolio}
              />
            </div>
          </a>
          <a
            href="https://portfolio-c44eb.web.app"
            target="blank"
            rel="noopener noreferrer"
            className={Styles.Projects3}
          >
            <div className={Styles.Title1}>
              <div className={Styles.Positionn}>
                <span>UI/UX Design </span>
                <span>Frontend Developer</span>
              </div>
              <div className={Styles.Year}>2025</div>
            </div>
            <div className={Styles.TitleCapstonee}>
              <div className={Styles.projectTitle}>PORTFOLIO</div>
              <div className={Styles.Description}>
                <span>
                  A responsive web-based portfolio built to present my skills,
                  projects, and design aesthetic as a frontend developer.
                </span>
              </div>
            </div>
            <div>
              <img src={Portfolio} alt="" className={Styles.imgPortfolio} />
            </div>
          </a>
          <a
            href="https://simplejsapp-93a09.firebaseapp.com/"
            target="blank"
            rel="noopener noreferrer"
            className={Styles.Projects3}
          >
            <div className={Styles.Title1}>
              <div className={Styles.Positionn}>
                <span>UI/UX Design </span>
                <span>Frontend Developer</span>
              </div>
              <div className={Styles.Year}>2025</div>
            </div>
            <div className={Styles.TitleCapstonee}>
              <div className={Styles.projectTitle}>Simple JS App</div>
              <div className={Styles.Description}>
                <span>
                  A beginner-friendly collection of React apps bundled into one
                  interface, styled with Tailwind CSS and powered by Vite for
                  lightning-fast development.
                </span>
              </div>
            </div>
            <div>
              <img src={SimpleJSApp} alt="" className={Styles.imgPortfolio} />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
