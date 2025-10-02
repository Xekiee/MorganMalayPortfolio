import Styles from "./certificate.module.css";
import Jira from "../public/JiraCertificate.pdf";
import SoftwareTesting from "../public/SoftwareTesting.pdf";
import Katalon from "../public/KatalonApiTesting.pdf";
import CompleteQACourse from "../public/CompleteQACourse.pdf";
export default function Certificate() {
  return (
    <div>
      <section id="Cerficate">
        <div className={Styles.title}>
          <span>Certificate</span>
        </div>
        <div className={Styles.certificateProof}>
          <div className={Styles.qaCert}>
            <iframe src={Jira} width="100%" height="250px"></iframe>
          </div>
          <div className={Styles.qaCert}>
            <iframe src={SoftwareTesting} width="100%" height="250px"></iframe>
          </div>
          <div className={Styles.qaCert}>
            <iframe src={Katalon} width="100%" height="250px"></iframe>
          </div>
          <div className={Styles.qaCert}>
            <iframe src={CompleteQACourse} width="100%" height="250px"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
