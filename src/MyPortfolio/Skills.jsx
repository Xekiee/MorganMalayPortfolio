import Styles from "./skills.module.css";
export default function Skilss() {
  return (
    <div>
      <section className={Styles.skillsSection} id="skills">
        <div className={Styles.skills}>
          <span className={Styles.skillstitle}>Skills and Tech Stack</span>
          <span className={Styles.subtitle}>
            Tools I used to build interactive experiences
          </span>
        </div>
        <div className={Styles.skillsList}>
          <div style={{ "--i": 6 }}>
            <i className="bx bxl-html5" Style="color: #E34F26"></i>
            <h1>HTML </h1>
          </div>
          <div style={{ "--i": 7 }}>
            <i className="bx bxl-css3" Style="color: #1572B6"></i>
            <h1> CSS </h1>
          </div>
          <div style={{ "--i": 8 }}>
            <i className="bx bxl-javascript" Style="color: #F7DF1E"></i>
            <h1>Javascript</h1>
          </div>
          <div style={{ "--i": 9 }}>
            <i className="bx bxl-react" Style="color: #61DAFB"></i>
            <h1>React</h1>
          </div>
          <div style={{ "--i": 10 }}>
            <i className="bx bxl-tailwind-css" Style="color: #38BDF8"></i>

            <h1>TailwindCSS</h1>
          </div>
          <div style={{ "--i": 11 }}>
            <img
              src="https://vitejs.dev/logo.svg"
              alt="Vite"
              className={Styles.vitelogo}
            />
            <h1> Vite</h1>
          </div>
          <div style={{ "--i": 12 }}>
            <i className="bx bxl-github" Style="color: #181717"></i>
            <h1>Github</h1>
          </div>
          <div style={{ "--i": 13 }}>
            <i className="bx bxl-figma" Style="color: #F24E1E"></i>
            <h1>Figma</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
