import Styles from "./contact.module.css";
import Profile from "../Assets/Profile.jpg";
import Linkin from "../Assets/Linkin.png";
import Instagram from "../Assets/Instagram.png";
import Jobstreet from "../Assets/Jobstreet.png";
export default function Contact() {
  return (
    <div>
      <section id="contact">
        <div className={Styles.title}>
          <h1>Contact Me</h1>
        </div>
        <div className={Styles.profilediv}>
          <div className={Styles.contactacc}>
            <div className={Styles.leftDiv}>
              <div className={Styles.profileImg}>
                <img src={Profile} />
                <div className={Styles.ProfileInfo}>
                  <h2>Morgan Malay</h2>
                  <span>Frontend Developer</span>
                  <span>UI/UX Designer</span>
                </div>
              </div>
              <div className={Styles.contactLinks}>
                <div className={Styles.contacticons}>
                  <i className="bx bx-phone"></i>
                  <i className="bx bx-envelope"></i>
                  <i className="bx bx-map"></i>
                </div>
                <div className={Styles.contactroutes}>
                  <span>+639563955619</span>
                  <span>maxxelmorganmalay@gmail.com</span>
                  <span>blk18 lot37 cedar street grand cypress SJDM</span>
                </div>
              </div>
            </div>
          </div>

          <div className={Styles.verticalDivider}></div>

          <div className={Styles.socmedacc}>
            <div className={Styles.socmedImg}>
              <img src={Linkin} alt="" />
              <img src={Instagram} alt="" />
              <img src={Jobstreet} alt="" />
            </div>
            <div className={Styles.socmedLink}>
              <a
                href="https://www.linkedin.com/in/maxxel-morgan-malay-4144a8371/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Maxxel Morgan Malay
              </a>
              <a
                href="https://www.instagram.com/morgzz_gan/"
                rel="noopener noreferrer"
                target="_blank"
              >
                morgzz_gan
              </a>
              <a
                href="https://ph.jobstreet.com/profile/me"
                rel="noopener noreferrer"
                target="_blank"
              >
                Maxxel Morgan Malay
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
