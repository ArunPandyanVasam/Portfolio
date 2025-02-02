import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="About Image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Web Developer Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
              An aspiring software developer with a diploma in Computer Programming.
          Passionate about coding, problem-solving, and learning new
          technologies. Skilled in Java, C, and Python, with hands-on experience
          in web development and database management. Excited to grow and
          contribute to real-world projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Projects Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Project Developer</h3>
              <p>
                Developed multiple projects, including a Python-based voice
                recognition system (VoiceMatch-AI) and a responsive portfolio
                website using Bootstrap, HTML, CSS, and JavaScript.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cybersecurity Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Cybersecurity Enthusiast</h3>
              <p>
                Certified in Ethical Hacking and Cybersecurity, with knowledge
                of security best practices, networking fundamentals, and
                Unix-based systems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
