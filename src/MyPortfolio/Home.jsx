import TypedText from "./Animation";
import Styles from "./home.module.css";
import Profile from "../Assets/ProfPic.jpg";
export default function Home() {
  return (
    <div>
      <section className={Styles.home} id="home">
        <div className={Styles.homeContent}>
          <h1> Hi, </h1>
          <h1>
            I'm <span>Morgan Malay </span>
          </h1>
          <h1>
            <TypedText />
          </h1>

          <div className={Styles.homeScl}>
            <a
              href="https://www.facebook.com/morgan.genzola"
              style={{ "--i": 7 }}
              className="bx bxl-facebook"
              rel="noopener noreferrer"
              target="_blank"
            ></a>
            <a
              href="https://www.instagram.com/morgzz_gan/"
              style={{ "--i": 8 }}
              className="bx bxl-instagram"
              rel="noopener noreferrer"
              target="_blank"
            ></a>
            <a
              href="https://web.whatsapp.com/"
              style={{ "--i": 9 }}
              className="bx bxl-whatsapp"
              rel="noopener noreferrer"
              target="_blank"
            ></a>
            <a
              href="https://github.com/Xekiee?tab=repositories"
              style={{ "--i": 10 }}
              className="bx bxl-github"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
        <div className={Styles.lineBorder}></div>
        <div className={Styles.Porfilee}>
          <img src={Profile} alt="Profile" className={Styles.profileImg} />
        </div>
      </section>
    </div>
  );
}
