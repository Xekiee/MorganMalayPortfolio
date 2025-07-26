import Styles from "./projects.module.css";

export default function Project() {
  return (
    <div>
      <section className={Styles.projectsection} id="projects">
        <div className={Styles.titleproject}>
          <span className={Styles.title}>My Projects</span>
        </div>

        <div className={Styles.projects}>
          <div className={Styles.Projects1}>
            <div>
              <div>
                <div>morgan</div>
                <div>morgan</div>
                <div>morgan</div>
              </div>
            </div>
          </div>
          <div className={Styles.Projects2}>
            <div>
              <div>
                <div>
                  <span></span>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div className={Styles.Projects3}>
            <div>
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
