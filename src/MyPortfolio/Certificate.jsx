import Styles from "./certificate.module.css";
export default function Certificate() {
  return (
    <div>
      <section className={Styles.certsec} id="Cerficate">
        <div className={Styles.title}>
          <span>Certificate</span>
        </div>
        <div className={Styles.certificateProof}>
          <div className={Styles.qaCert}>
            <div>Morgan</div>
          </div>
          <div className={Styles.qaCert}>Morgan</div>
          <div className={Styles.qaCert}>Morgan</div>
          <div className={Styles.qaCert}>Morgan</div>
        </div>
      </section>
    </div>
  );
}
