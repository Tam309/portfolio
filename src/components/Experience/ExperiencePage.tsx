import styles from "./ExperiencePage.module.css";

const experiences = [
  {
    id: "factorise",
    role: "Software Developer Intern",
    company: "Near Real",
    type: "Internship",
    location: "Oulu, Finland",
    date: "7th January 2026 - Present",
    link: "https://www.near-real.com/",
    logo: "https://www.near-real.com/logo.03615c4c.png",
    responsibilities: [
      "Develop and maintain mobile application called My Digital Twin using React Native and Expo framework.",
      "Intergrated Apple HealthKit and Google Health Connect to collect health data such as steps, heart rate, sleep sessions, etc.",
      "Continue developing manual and automatic synchronization to send datas to backend server.",
      "Using Zustand for state management and MMKV for local data storage to enhance app performance and user experience.",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand",
      "MMKV",
      "Health Connect",
      "HealthKit",
      "Git",
      "GitLab",
      "Microsoft Teams",
      "Jira",
    ],
  },
  {
    id: "factorise",
    role: "QA Trainee",
    company: "Spectarium",
    type: "Internship",
    location: "Oulu, Finland",
    date: "1st July 2025 - 30th Aug 2025",
    link: "https://www.spectarium.games/",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHzq8PLTI_v-w/company-logo_200_200/company-logo_200_200/0/1654762391374/spectarium_logo?e=1771459200&v=beta&t=VcZKpOrp3ZmuQaxVhDSxoY4QnJyIFcyf_ymqppP5G18",
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
      "Git",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className={styles.page}>
      <div className="container py-5">
        {/* Optional heading */}
        <h1 className={styles.title}>Experience</h1>

        {experiences.map((exp) => (
          <div key={exp.id} className={`${styles.expCard} mx-auto mt-4`}>
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
    </main>
  );
}
