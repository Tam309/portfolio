import React from "react";
import styles from "./Experience.module.css";

const experiences = [
  {
    id: "factorise",
    role: "QA Trainee",
    company: "Spectarium",
    type: "Internship",
    location: "Oulu, Finland",
    date: "1st July 2025 - 30th Aug 2025",
    link: "https://www.spectarium.games/",
    logo: "https://res.cloudinary.com/dwnsglhao/image/upload/v1760430361/OIP_mr4fs4.webp",
    responsibilities: [
      "Tested game features in Unity and reported issues to developers, improving product stability.",
      "Used GitHub Desktop for version control and collaborated with C# developers in a real software team.",
      "Gained problem-solving skills and attention to detail, supporting backend testing and debugging.",
    ],
    technologies: [
      "Slack",
      "Github desktop",
      "Favro",
      "Unity",
      "Visual Studio",
      "Git"
    ],
  },
];

export default function Experience() {
  return (
    <div className={`${styles.page} py-5`}>
      <div className="container text-center">
        <h1 className={styles.title}>Experience</h1>
        <p className={`mb-4 ${styles.subtitle}`}>
          Explore my professional experience and responsibilities that helped me
          grow as a developer.
        </p>
      </div>

      <div className="container mt-4">
        {experiences.map((exp) => (
          <div key={exp.id} className={`${styles.expCard} mx-auto`}>
            <div className="d-flex align-items-start gap-3">
              <div className={styles.logoWrap}>
                <img src={exp.logo} alt={exp.company} />
              </div>
              <div className="flex-grow-1 text-start">
                <h4 className={styles.role}>{exp.role}</h4>
                <a
                  href={exp.link}
                  className={styles.company}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.company}
                </a>
                <div className={styles.meta}>
                  <span>{exp.type}</span> · <span>{exp.location}</span> ·{" "}
                  <span>{exp.date}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-start">
              <h5 className={styles.sectionHeading}>Key Responsibilities:</h5>
              <ul className={styles.list}>
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h5 className={styles.sectionHeading}>Technologies Used:</h5>
              <div className="d-flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
