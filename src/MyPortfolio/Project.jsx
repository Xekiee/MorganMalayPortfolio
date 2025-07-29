import Styles from "./projects.module.css";
import Plantito from "../Assets/Plantitotita.png";
import Portfolio from "../Assets/Portfolio.png";
export default function Project() {
  return (
    <div>
      <section className={Styles.projectsection} id="projects">
        <div className={Styles.titleproject}>
          <span className={Styles.title}>My Projects</span>
        </div>

        <div className={Styles.projects}>
          <div className={Styles.Projects1}>
            <div className={Styles.Title1}>
              <div className={Styles.Positionn}>
                <span>Quality Assurance, UI/UX Designer</span>
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
          </div>
          <div className={Styles.Projects2}>
            <div className={Styles.Title1}>
              <div className={Styles.Positionn}>
                <span>Frontend Developer, UI/UX Designer</span>
              </div>
              <div className={Styles.Year}>2025</div>
            </div>
            <div className={Styles.TitleCapstonee}>
              <div className={Styles.projectTitle}>
                <span> Intern : CGWCEISC Inventory System</span>
              </div>
              <div className={Styles.Description}>
                <span>
                  A web based inventory management system for PCG’s Storage and
                  Accountability Officer.
                </span>
              </div>
            </div>
          </div>
          <div className={Styles.Projects3}>
            <div className={Styles.Title1}>
              <div className={Styles.Positionn}>
                <span>UI/UX Design, Frontend Developer</span>
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
          </div>
        </div>
      </section>
    </div>
  );
}
