import Styles from "./about.module.css";
import Profile from "../Assets/Profilee.jpg";
import Resume from "../public/MorganMalayResume.pdf";
export default function About() {
  return (
    <div>
      <section className={Styles.about} id="about">
        <div className={Styles.aboutimg}>
          <img src={Profile} />
          <a href={Resume} download={Resume} className={Styles.btnbox}>
            {" "}
            Downlaod CV <i className="bx bx-download"></i>
          </a>
        </div>
        <div className={Styles.abouttext}>
          <div className={Styles.title}>
            <h2>About Me</h2>
          </div>
          <span>Frontend Developer/ UI/UX Designer / Software QA Engineer</span>
          <p>
            I'm a passionate Frontend Developer and UI/UX Designer who loves
            turning ideas into clean, interactive, and user-focused digital
            experiences. With a strong foundation in JavaScript, I specialize in
            building responsive web interfaces using React and Vite for fast and
            efficient development. I care deeply about the user experience and
            design systems, which drives my attention to both detail and
            functionality. I'm also skilled in Figma, where I design intuitive,
            modern UI mockups and prototypes. From wireframes to polished
            interfaces, I enjoy every step of the design-to-code journey.
            Whether I’m designing a sleek mobile UI or developing a dynamic web
            app, I strive to create products that are both beautiful and usable.
          </p>
        </div>
      </section>
    </div>
  );
}
