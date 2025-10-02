import Styles from "./certificate.module.css";
import Jira from "../public/JiraCert.png";
import SoftwareTesting from "../public/SoftwareCert.png";
import Katalon from "../public/KatalonCert.png";
import CompleteQACourse from "../public/QACompleteCert.png";

export default function Certificate() {
  return (
    <div>
      <section id="Cerficate">
        <div className={Styles.title}>
          <span>Certificate</span>
        </div>
        <div className={Styles.certificateProof}>
          <img className={Styles.qaCert} src={CompleteQACourse} alt="" />
          <img className={Styles.qaCert} src={Jira} alt="" />
          <img className={Styles.qaCert} src={Katalon} alt="" />
          <img className={Styles.qaCert} src={SoftwareTesting} alt="" />
        </div>
      </section>
    </div>
  );
}
