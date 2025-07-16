import Styles from "./services.module.css";
export default function Services() {
  return (
    <div>
      <section id="services">
        <div className={Styles.services}>
          <div className={Styles.container}>
            <h1 className={Styles.title}>My Services</h1>
            <div className={Styles.servicesList}>
              <div>
                <i
                  className={`${Styles.iconStyle} bx bx-code`}
                  style={{ color: "var(--da)" }}
                ></i>
                <h2>UI/UX Design</h2>
                <p>
                  I design intuitive, user-centered interfaces with a focus on
                  clarity and usability. I use Figma to create clean, modern
                  layouts that align with brand identity. I prioritize user
                  flow, accessibility, and responsive behavior across all
                  devices. I turn ideas into interactive prototypes that
                  streamline the design-to-development process.
                </p>
                <a
                  href="https://www.figma.com/design/KU70Kw1H6MZ3hcuAUCxhb1/Portfolio?node-id=0-1&p=f&t=aXVkZvElWrDNs5NI-0"
                  className={Styles.read}
                >
                  Sample
                </a>
              </div>
              <div>
                <i
                  className={`${Styles.iconStyle} bx bx-crop`}
                  style={{ color: "var(--Daccent-color--)" }}
                ></i>
                <h2>Frontend Development</h2>
                <p>
                  I craft responsive, high-performance websites with React and
                  Vite. I turn Figma designs into clean, scalable, pixel-perfect
                  code. I follow best practices in HTML, CSS, and JS for full
                  compatibility. I write reusable, maintainable code with
                  efficient state management.
                </p>
                <a href="#" className={Styles.read}>
                  Sample
                </a>
              </div>
              <div>
                <i
                  className={`bx bxl-apple ${Styles.iconStyle}`}
                  style={{ color: "var(--Daccent-color--)" }}
                ></i>
                <h2>Database</h2>
                <p>
                  I design and manage scalable NoSQL databases using MongoDB. I
                  structure data models to support performance and flexibility.
                  I integrate MongoDB seamlessly with frontend and backend
                  workflows. I use Mongoose for schema validation and efficient
                  data
                </p>
                <a href="#" className={Styles.read}>
                  Sample
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}
